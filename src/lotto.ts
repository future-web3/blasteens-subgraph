import {
  RandomnessRequested as RandomnessRequestedEvent,
  RandomnessRevealed as RandomnessRevealedEvent,
  Winner as WinnerEvent,
  EnterLottoGame as EnterLottoGameEvent,
} from "../generated/Lotto/Lotto";
import {
  RandomnessRequested,
  RandomnessRevealed,
  Winner,
  EnterLottoGame,
} from "../generated/schema";

export function handleRandomnessRequested(
  event: RandomnessRequestedEvent,
): void {
  let entity = new RandomnessRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.sequenceNumber = event.params.sequenceNumber;
  entity.requester = event.params.requester;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRandomnessRevealed(event: RandomnessRevealedEvent): void {
  let entity = new RandomnessRevealed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.randomNumber = event.params.randomNumber;
  entity.revealer = event.params.revealer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWinner(event: WinnerEvent): void {
  let entity = new Winner(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.winner = event.params.winner;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEnterLottoGame(event: EnterLottoGameEvent): void {
  let entity = new EnterLottoGame(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.participant = event.params.participant;
  entity.number = event.params.number;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
