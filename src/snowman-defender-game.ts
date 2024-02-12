import {
  ScoreUpdated as ScoreUpdatedEvent,
  ClaimReward as ClaimRewardEvent,
  NewRound as NewRoundEvent,
  RedeemTicket as RedeemTicketEvent,
} from "../generated/SnowmanDefenderGame/Game";
import {
  ScoreUpdated,
  ClaimReward,
  NewRound,
  RedeemTicket,
} from "../generated/schema";

export function handleScoreUpdated(event: ScoreUpdatedEvent): void {
  let entity = new ScoreUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.round_gameRound = event.params.round.gameRound;
  entity.round_end = event.params.round.end;
  entity.round_claimPeriod = event.params.round.claimPeriod;
  entity.round_gameLeaderBoard = event.params.round.gameLeaderBoard;
  entity.round_hasClaimedBySomeone = event.params.round.hasClaimedBySomeone;
  entity.gameId = event.params.gameId;
  entity.gameName = event.params.gameName;

  // serialize GameLeaderboard.User[]
  let gameLeaderboardInfo = event.params.gameLeaderboardInfo;
  let gameLeaderboardInfoStrings = new Array<string>();
  for (let i = 0; i < gameLeaderboardInfo.length; i++) {
    let user = gameLeaderboardInfo[i];
    let userInfo =
      user.user.toHex() +
      "," +
      user.score.toString() +
      "," +
      user.prizeClaimed.toString();
    gameLeaderboardInfoStrings.push(userInfo);
  }
  entity.gameLeaderboardInfo = gameLeaderboardInfoStrings;

  entity.user = event.params.user;
  entity.score = event.params.score;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleClaimReward(event: ClaimRewardEvent): void {
  let entity = new ClaimReward(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.round_gameRound = event.params.round.gameRound;
  entity.round_end = event.params.round.end;
  entity.round_claimPeriod = event.params.round.claimPeriod;
  entity.round_gameLeaderBoard = event.params.round.gameLeaderBoard;
  entity.round_hasClaimedBySomeone = event.params.round.hasClaimedBySomeone;
  entity.gameId = event.params._gameId;
  entity.gameName = event.params._gameName;
  entity.user = event.params.user;
  entity.totalClaimedPrize = event.params.totalClaimedPrize;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNewRound(event: NewRoundEvent): void {
  let entity = new NewRound(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.round_gameRound = event.params.round.gameRound;
  entity.round_end = event.params.round.end;
  entity.round_claimPeriod = event.params.round.claimPeriod;
  entity.round_gameLeaderBoard = event.params.round.gameLeaderBoard;
  entity.round_hasClaimedBySomeone = event.params.round.hasClaimedBySomeone;
  entity.gameId = event.params.gameId;
  entity.gameName = event.params.gameName;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRedeemTicket(event: RedeemTicketEvent): void {
  let entity = new RedeemTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.round_gameRound = event.params.round.gameRound;
  entity.round_end = event.params.round.end;
  entity.round_claimPeriod = event.params.round.claimPeriod;
  entity.round_gameLeaderBoard = event.params.round.gameLeaderBoard;
  entity.round_hasClaimedBySomeone = event.params.round.hasClaimedBySomeone;
  entity.gameId = event.params.gameId;
  entity.gameName = event.params.gameName;
  entity.player = event.params.player;
  entity.ticketType = event.params._ticketType;
  entity.ticketPrice = event.params.ticketPrice;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
