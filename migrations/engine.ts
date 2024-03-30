import probabilities from './mocks/probabilities.json'
import names from './mocks/names.json'

import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor'
import { Protocol } from '../target/types/protocol'
import * as anchor from '@coral-xyz/anchor'
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js'
import { encodeName, getShipperAddress } from '../sdk/sdk'
import { awaitedAirdrop } from '../tests/utils'

const connection = new Connection(clusterApiUrl('devnet'), { commitment: 'confirmed' })
const wallet = Wallet.local()
const provider = new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions())
anchor.setProvider(provider)
const program = anchor.workspace.Protocol as Program<Protocol>

const run = async () => {
  const action = chooseAction()
  const keypair = Keypair.generate()
  await awaitedAirdrop(connection, keypair.publicKey, 1e9)

  switch (action) {
    case 'registerShipper':
      const shipperName = randomFrom(names.names) + ' ' + randomFrom(names.shipperPostfixes)
      const shipper = getShipperAddress(program, keypair.publicKey)

      await program.methods
        .registerShipper(encodeName(shipperName))
        .accounts({
          shipper,
          signer: keypair.publicKey
        })
        .signers([keypair])
        .rpc()

      console.log('Registered shipper', shipperName)
      break

    case 'registerForwarder':
      const forwarderName = randomFrom(names.names) + ' ' + randomFrom(names.forwarderPostfixes)
      const forwarder = getShipperAddress(program, keypair.publicKey)

      await program.methods
        .registerForwarder(encodeName(forwarderName))
        .accounts({
          forwarder,
          signer: keypair.publicKey
        })
        .signers([keypair])
        .rpc()

      console.log('Registered forwarder', forwarderName)
      break

    case 'registerCarrier':
      const carrierName = randomFrom(names.names) + ' ' + randomFrom(names.carrierPostfixes)
      const carrier = getShipperAddress(program, keypair.publicKey)
      let location: { lon: number; lat: number } | null = null

      if (Math.random() < probabilities.carrierIsAvailable) {
        const location = await chooseLocation()
      }

      await program.methods
        .registerCarrier(encodeName(carrierName), location)
        .accounts({
          carrier,
          signer: keypair.publicKey
        })
        .signers([keypair])
        .rpc()

      console.log('Registered carrier', carrierName, 'at', location)
      break

    default:
      console.log('Unknown action', action)
      break
  }
}

const chooseAction = (): string => {
  const totalWeight = probabilities.actions.reduce((acc, { weight }) => acc + weight, 0)
  const normalized = probabilities.actions.map(({ action, weight }) => ({
    action,
    weight: weight / totalWeight
  }))

  const random = Math.random()

  let sum = 0
  let result = 'none'
  for (const { action, weight } of normalized) {
    sum += weight
    if (random < sum) {
      result = action
      break
    }
  }

  return result
}

const chooseLocation = async (): Promise<any> => {
  let counter = 4
  while (counter--) {
    try {
      const left = 2
      const right = 22
      const top = 47
      const bottom = 56

      const lat = left + Math.random() * (right - left)
      const lon = top + Math.random() * (bottom - top)

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lon}&lon=${lat}&format=jsonv2`
      )
      const parsed = (await res.json()) as { lat: string; lon: string }

      if (!parsed || !parsed?.lon || !parsed?.lat) {
        console.error('Failed to get location', parsed)
        continue
      }

      return {
        ...parsed,
        lon: Number(parsed?.lon),
        lat: Number(parsed?.lat)
      }
    } catch (error) {}
  }

  console.error('Failed to get location')
}

const randomFrom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

run()
