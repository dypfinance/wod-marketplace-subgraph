import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CollectionAdded } from "../generated/schema"
import { CollectionAdded as CollectionAddedEvent } from "../generated/OpenFlux/OpenFlux"
import { handleCollectionAdded } from "../src/open-flux"
import { createCollectionAddedEvent } from "./open-flux-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collectionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newCollectionAddedEvent = createCollectionAddedEvent(
      collectionAddress,
      owner
    )
    handleCollectionAdded(newCollectionAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CollectionAdded created and stored", () => {
    assert.entityCount("CollectionAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CollectionAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collectionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollectionAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
