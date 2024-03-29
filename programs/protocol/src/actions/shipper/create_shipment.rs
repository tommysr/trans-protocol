use anchor_lang::prelude::*;

use crate::{Channel, Error, Name, Shipment, ShipmentCreated, ShipmentData, Shipper};

#[derive(Accounts)]
pub struct CreateShipment<'info> {
    #[account(init,
        seeds = [b"shipment", signer.key.as_ref(), &shipper.load().unwrap().count.to_le_bytes()], bump,
        payer = signer, 
        space = 8 + std::mem::size_of::<Shipment>()
    )]
    pub shipment: AccountLoader<'info, Shipment>,
    #[account(mut, 
        seeds = [b"shipper", signer.key.as_ref()], bump,
        constraint = shipper.load().unwrap().authority == *signer.key @ Error::SignerNotAnAuthority
    )]
    pub shipper: AccountLoader<'info, Shipper>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<CreateShipment>, price: u64, name: Name, shipment: ShipmentData) -> Result<()> {
    let shipper = &mut ctx.accounts.shipper.load_mut()?;
    let account = &mut ctx.accounts.shipment.load_init()?;
    
    **account = Shipment {
        shipper: *ctx.accounts.signer.key,
        forwarder: Pubkey::default(),
        carrier: Pubkey::default(),
        price,
        no: shipper.count,
        reserved: [0; 4],
        shipment,
        name,
        channel: Channel::default()
    };
    
    shipper.count += 1;

    emit!(ShipmentCreated { 
        shipper: ctx.accounts.shipper.key(), 
        shipment: ctx.accounts.shipment.key()
    });

    Ok(())
}
