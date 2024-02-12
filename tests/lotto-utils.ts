import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RandomnessRequested,
  RandomnessRevealed,
  Winner
} from "../generated/Lotto/Lotto"

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

export function createRandomnessRequestedEvent(
  sequenceNumber: BigInt,
  requester: Address
): RandomnessRequested {
  let randomnessRequestedEvent = changetype<RandomnessRequested>(newMockEvent())

  randomnessRequestedEvent.parameters = new Array()

  randomnessRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "sequenceNumber",
      ethereum.Value.fromUnsignedBigInt(sequenceNumber)
    )
  )
  randomnessRequestedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return randomnessRequestedEvent
}

export function createRandomnessRevealedEvent(
  randomNumber: BigInt,
  revealer: Address
): RandomnessRevealed {
  let randomnessRevealedEvent = changetype<RandomnessRevealed>(newMockEvent())

  randomnessRevealedEvent.parameters = new Array()

  randomnessRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "randomNumber",
      ethereum.Value.fromUnsignedBigInt(randomNumber)
    )
  )
  randomnessRevealedEvent.parameters.push(
    new ethereum.EventParam("revealer", ethereum.Value.fromAddress(revealer))
  )

  return randomnessRevealedEvent
}

export function createWinnerEvent(winner: Address, amount: BigInt): Winner {
  let winnerEvent = changetype<Winner>(newMockEvent())

  winnerEvent.parameters = new Array()

  winnerEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  winnerEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return winnerEvent
}
