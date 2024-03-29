import { Connection, Keypair, PublicKey } from '@solana/web3.js'
import BN from 'bn.js'

export const ONE_SOL = new BN('1000000000')
export const ONE_HOUR = 3600
export const U64_MAX = new BN(2).pow(new BN(64)).subn(1)

export const awaitedAirdrop = async (
  connection: Connection,
  publicKey: PublicKey,
  amount: number
) => {
  const airdropSignature = await connection.requestAirdrop(publicKey, 1e9)
  let balance = await connection.getBalance(publicKey)

  const now = Date.now()

  while (balance < amount) {
    if (Date.now() - now > 3000) throw new Error('Airdrop failed')

    balance = await connection.getBalance(publicKey)
    await sleep(10)
  }
}

export const awaitedAirdrops = async (
  connection: Connection,
  publicKeys: PublicKey[],
  amount: number
) => {
  let airdrops: Promise<void>[] = []

  while (amount > 1e9) {
    airdrops = airdrops.concat(publicKeys.map(async pk => awaitedAirdrop(connection, pk, 1e9)))
    amount -= 1e9
  }
  airdrops = airdrops.concat(publicKeys.map(async pk => awaitedAirdrop(connection, pk, amount)))

  await Promise.all(airdrops)
}

export const sleep = async (arg0: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, arg0)
  })
}

export const prefunded = async (connection: Connection) => {
  const keypair = Keypair.generate()
  await awaitedAirdrop(connection, keypair.publicKey, 1e9)
  return keypair
}
