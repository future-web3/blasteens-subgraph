import {
  BuyTicket as BuyTicketEvent,
  AirdropLottoTickets as AirdropLottoTicketsEvent,
  ClaimLottoTicket as ClaimLottoTicketEvent,
} from "../generated/GameTicket/GameTicket";
import {
  BuyTicket,
  AirdropLottoTickets,
  ClaimLottoTicket,
} from "../generated/schema";

export function handleBuyTicket(event: BuyTicketEvent): void {
  let entity = new BuyTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.buyer = event.params.buyer;
  entity.ticketType = event.params.ticketType;
  entity.ticketNumber = event.params.ticketNumber;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAirdropLottoTickets(
  event: AirdropLottoTicketsEvent,
): void {
  let entity = new AirdropLottoTickets(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  let players = event.params.players;
  let playerStrings = new Array<string>();
  for (let i = 0; i < players.length; i++) {
    playerStrings.push(players[i].toHex());
  }
  entity.players = playerStrings;
  entity.numberOfTickets = event.params.numberOfTickets;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleClaimLottoTicket(event: ClaimLottoTicketEvent): void {
  let entity = new ClaimLottoTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.claimer = event.params.claimer;
  entity.ticketType = event.params.ticketType;
  entity.number = event.params.number;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
