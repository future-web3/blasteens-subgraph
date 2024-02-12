import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { OwnershipTransferred, ScoreUpdated } from "../generated/Game/Game"

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

export function createScoreUpdatedEvent(
  round: ethereum.Tuple,
  gameId: BigInt,
  gameName: string,
  gameLeaderboardInfo: Array<ethereum.Tuple>,
  user: Address,
  score: BigInt
): ScoreUpdated {
  let scoreUpdatedEvent = changetype<ScoreUpdated>(newMockEvent())

  scoreUpdatedEvent.parameters = new Array()

  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromTuple(round))
  )
  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("gameName", ethereum.Value.fromString(gameName))
  )
  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "gameLeaderboardInfo",
      ethereum.Value.fromTupleArray(gameLeaderboardInfo)
    )
  )
  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  scoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return scoreUpdatedEvent
}
