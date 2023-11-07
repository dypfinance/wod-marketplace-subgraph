import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemBought,
  ItemCanceled,
  ItemListed,
  OfferCanceled,
  OfferMade,
  OfferUpdated,
  OwnershipTransferred
} from "../generated/Marketplace/Marketplace"

export function createItemBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  payment: ethereum.Tuple
): ItemBought {
  let itemBoughtEvent = changetype<ItemBought>(newMockEvent())

  itemBoughtEvent.parameters = new Array()

  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )

  return itemBoughtEvent
}

export function createItemCanceledEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  payment: ethereum.Tuple
): ItemCanceled {
  let itemCanceledEvent = changetype<ItemCanceled>(newMockEvent())

  itemCanceledEvent.parameters = new Array()

  itemCanceledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )

  return itemCanceledEvent
}

export function createItemListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  payment: ethereum.Tuple
): ItemListed {
  let itemListedEvent = changetype<ItemListed>(newMockEvent())

  itemListedEvent.parameters = new Array()

  itemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )

  return itemListedEvent
}

export function createOfferCanceledEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  payment: ethereum.Tuple,
  offerIndex: BigInt
): OfferCanceled {
  let offerCanceledEvent = changetype<OfferCanceled>(newMockEvent())

  offerCanceledEvent.parameters = new Array()

  offerCanceledEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )
  offerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "offerIndex",
      ethereum.Value.fromUnsignedBigInt(offerIndex)
    )
  )

  return offerCanceledEvent
}

export function createOfferMadeEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  payment: ethereum.Tuple,
  offerIndex: BigInt
): OfferMade {
  let offerMadeEvent = changetype<OfferMade>(newMockEvent())

  offerMadeEvent.parameters = new Array()

  offerMadeEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  offerMadeEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerMadeEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  offerMadeEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )
  offerMadeEvent.parameters.push(
    new ethereum.EventParam(
      "offerIndex",
      ethereum.Value.fromUnsignedBigInt(offerIndex)
    )
  )

  return offerMadeEvent
}

export function createOfferUpdatedEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  newPrice: BigInt,
  payment: ethereum.Tuple,
  offerIndex: BigInt
): OfferUpdated {
  let offerUpdatedEvent = changetype<OfferUpdated>(newMockEvent())

  offerUpdatedEvent.parameters = new Array()

  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("payment", ethereum.Value.fromTuple(payment))
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerIndex",
      ethereum.Value.fromUnsignedBigInt(offerIndex)
    )
  )

  return offerUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
