import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CollectionAdded,
  CollectionEdited,
  CollectionOfferAccepted,
  CollectionOfferCancelled,
  CollectionOfferMade,
  CollectionRemoved,
  ListingCancelled,
  ListingEdited,
  NFTListed,
  NFTPurchased,
  OfferAcceptedForNFT,
  OfferCancelledForNFT,
  OfferMadeForNFT,
  OwnershipTransferred
} from "../generated/OpenFlux/OpenFlux"

export function createCollectionAddedEvent(
  collectionAddress: Address,
  owner: Address
): CollectionAdded {
  let collectionAddedEvent = changetype<CollectionAdded>(newMockEvent())

  collectionAddedEvent.parameters = new Array()

  collectionAddedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return collectionAddedEvent
}

export function createCollectionEditedEvent(
  collectionAddress: Address,
  newOwner: Address
): CollectionEdited {
  let collectionEditedEvent = changetype<CollectionEdited>(newMockEvent())

  collectionEditedEvent.parameters = new Array()

  collectionEditedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionEditedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return collectionEditedEvent
}

export function createCollectionOfferAcceptedEvent(
  collectionAddress: Address,
  offeror: Address,
  acceptor: Address,
  tokenId: BigInt,
  amount: BigInt,
  paymentToken: Address
): CollectionOfferAccepted {
  let collectionOfferAcceptedEvent = changetype<CollectionOfferAccepted>(
    newMockEvent()
  )

  collectionOfferAcceptedEvent.parameters = new Array()

  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )
  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("acceptor", ethereum.Value.fromAddress(acceptor))
  )
  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  collectionOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )

  return collectionOfferAcceptedEvent
}

export function createCollectionOfferCancelledEvent(
  collectionAddress: Address,
  offeror: Address
): CollectionOfferCancelled {
  let collectionOfferCancelledEvent = changetype<CollectionOfferCancelled>(
    newMockEvent()
  )

  collectionOfferCancelledEvent.parameters = new Array()

  collectionOfferCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionOfferCancelledEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )

  return collectionOfferCancelledEvent
}

export function createCollectionOfferMadeEvent(
  collectionAddress: Address,
  offeror: Address,
  amount: BigInt,
  paymentToken: Address
): CollectionOfferMade {
  let collectionOfferMadeEvent = changetype<CollectionOfferMade>(newMockEvent())

  collectionOfferMadeEvent.parameters = new Array()

  collectionOfferMadeEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  collectionOfferMadeEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )
  collectionOfferMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  collectionOfferMadeEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )

  return collectionOfferMadeEvent
}

export function createCollectionRemovedEvent(
  collectionAddress: Address
): CollectionRemoved {
  let collectionRemovedEvent = changetype<CollectionRemoved>(newMockEvent())

  collectionRemovedEvent.parameters = new Array()

  collectionRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )

  return collectionRemovedEvent
}

export function createListingCancelledEvent(
  nftAddress: Address,
  tokenId: BigInt
): ListingCancelled {
  let listingCancelledEvent = changetype<ListingCancelled>(newMockEvent())

  listingCancelledEvent.parameters = new Array()

  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return listingCancelledEvent
}

export function createListingEditedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  newPrice: BigInt
): ListingEdited {
  let listingEditedEvent = changetype<ListingEdited>(newMockEvent())

  listingEditedEvent.parameters = new Array()

  listingEditedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  listingEditedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingEditedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return listingEditedEvent
}

export function createNFTListedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  seller: Address,
  price: BigInt,
  paymentToken: Address
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )

  return nftListedEvent
}

export function createNFTPurchasedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  buyer: Address,
  seller: Address,
  paymentToken: Address,
  amount: BigInt
): NFTPurchased {
  let nftPurchasedEvent = changetype<NFTPurchased>(newMockEvent())

  nftPurchasedEvent.parameters = new Array()

  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return nftPurchasedEvent
}

export function createOfferAcceptedForNFTEvent(
  nftAddress: Address,
  tokenId: BigInt,
  offeror: Address,
  seller: Address,
  amount: BigInt,
  paymentToken: Address
): OfferAcceptedForNFT {
  let offerAcceptedForNftEvent = changetype<OfferAcceptedForNFT>(newMockEvent())

  offerAcceptedForNftEvent.parameters = new Array()

  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )
  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  offerAcceptedForNftEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )

  return offerAcceptedForNftEvent
}

export function createOfferCancelledForNFTEvent(
  nftAddress: Address,
  tokenId: BigInt,
  offeror: Address
): OfferCancelledForNFT {
  let offerCancelledForNftEvent = changetype<OfferCancelledForNFT>(
    newMockEvent()
  )

  offerCancelledForNftEvent.parameters = new Array()

  offerCancelledForNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerCancelledForNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCancelledForNftEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )

  return offerCancelledForNftEvent
}

export function createOfferMadeForNFTEvent(
  nftAddress: Address,
  tokenId: BigInt,
  offeror: Address,
  amount: BigInt,
  paymentToken: Address
): OfferMadeForNFT {
  let offerMadeForNftEvent = changetype<OfferMadeForNFT>(newMockEvent())

  offerMadeForNftEvent.parameters = new Array()

  offerMadeForNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  offerMadeForNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerMadeForNftEvent.parameters.push(
    new ethereum.EventParam("offeror", ethereum.Value.fromAddress(offeror))
  )
  offerMadeForNftEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  offerMadeForNftEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )

  return offerMadeForNftEvent
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
