import {
  CollectionAdded as CollectionAddedEvent,
  CollectionEdited as CollectionEditedEvent,
  CollectionOfferAccepted as CollectionOfferAcceptedEvent,
  CollectionOfferCancelled as CollectionOfferCancelledEvent,
  CollectionOfferMade as CollectionOfferMadeEvent,
  CollectionRemoved as CollectionRemovedEvent,
  ListingCancelled as ListingCancelledEvent,
  ListingEdited as ListingEditedEvent,
  NFTListed as NFTListedEvent,
  NFTPurchased as NFTPurchasedEvent,
  OfferAcceptedForNFT as OfferAcceptedForNFTEvent,
  OfferCancelledForNFT as OfferCancelledForNFTEvent,
  OfferMadeForNFT as OfferMadeForNFTEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/OpenFlux/OpenFlux"
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
} from "../generated/schema"

export function handleCollectionAdded(event: CollectionAddedEvent): void {
  let entity = new CollectionAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionEdited(event: CollectionEditedEvent): void {
  let entity = new CollectionEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionOfferAccepted(
  event: CollectionOfferAcceptedEvent
): void {
  let entity = new CollectionOfferAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.offeror = event.params.offeror
  entity.acceptor = event.params.acceptor
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.paymentToken = event.params.paymentToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionOfferCancelled(
  event: CollectionOfferCancelledEvent
): void {
  let entity = new CollectionOfferCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.offeror = event.params.offeror

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionOfferMade(
  event: CollectionOfferMadeEvent
): void {
  let entity = new CollectionOfferMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.offeror = event.params.offeror
  entity.amount = event.params.amount
  entity.paymentToken = event.params.paymentToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionRemoved(event: CollectionRemovedEvent): void {
  let entity = new CollectionRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let entity = new ListingCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListingEdited(event: ListingEditedEvent): void {
  let entity = new ListingEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.newPrice = event.params.newPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTListed(event: NFTListedEvent): void {
  let entity = new NFTListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.price = event.params.price
  entity.paymentToken = event.params.paymentToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTPurchased(event: NFTPurchasedEvent): void {
  let entity = new NFTPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer
  entity.seller = event.params.seller
  entity.paymentToken = event.params.paymentToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferAcceptedForNFT(
  event: OfferAcceptedForNFTEvent
): void {
  let entity = new OfferAcceptedForNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.offeror = event.params.offeror
  entity.seller = event.params.seller
  entity.amount = event.params.amount
  entity.paymentToken = event.params.paymentToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCancelledForNFT(
  event: OfferCancelledForNFTEvent
): void {
  let entity = new OfferCancelledForNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.offeror = event.params.offeror

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferMadeForNFT(event: OfferMadeForNFTEvent): void {
  let entity = new OfferMadeForNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.offeror = event.params.offeror
  entity.amount = event.params.amount
  entity.paymentToken = event.params.paymentToken

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
