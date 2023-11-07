import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
  OfferCanceled as OfferCanceledEvent,
  OfferMade as OfferMadeEvent,
  OfferUpdated as OfferUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Marketplace/Marketplace"
import {
  ItemBought,
  ItemCanceled,
  ItemListed,
  OfferCanceled,
  OfferMade,
  OfferUpdated,
  OwnershipTransferred
} from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
  let entity = new ItemBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let entity = new ItemCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemListed(event: ItemListedEvent): void {
  let entity = new ItemListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCanceled(event: OfferCanceledEvent): void {
  let entity = new OfferCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token
  entity.offerIndex = event.params.offerIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferMade(event: OfferMadeEvent): void {
  let entity = new OfferMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token
  entity.offerIndex = event.params.offerIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferUpdated(event: OfferUpdatedEvent): void {
  let entity = new OfferUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.newPrice = event.params.newPrice
  entity.payment_paymentType = event.params.payment.paymentType
  entity.payment_token = event.params.payment.token
  entity.offerIndex = event.params.offerIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
