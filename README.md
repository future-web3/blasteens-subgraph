# Blasteens Subgraph
<p align="center">
  <img alt="Blasteens" src="public/images/blasteens.png" width="500" >
</p>
A subgraph, tailored for the Blasteens platform, is a custom API designed to interact with blockchain data. It employs the GraphQL query language for data requests and utilizes the Graph CLI for deployment to a Graph Node. After deployment, when published on The Graph's decentralized network, Indexers process these subgraphs, enabling them to be accessible for queries by Blasteens' subgraph consumers.
<br><br>

> Want to know more? <br>
> 👉 [Blasteens' README.md](https://github.com/future-web3/blasteens-ui) 👈

> Be more comfy watching an intro video?<br>
> 👉 [What is Blasteens?](url) 👈

## Table of Contents
* [Schema](#schema)
* [How to contribute?](#how-to-contribute)
* [License](#license)
* [Developed By](#developed-by)

## Schema:
```typescript
type ScoreUpdated @entity(immutable: true) {
  id: Bytes!
  round_gameRound: BigInt! # uint256
  round_end: BigInt! # uint256
  round_claimPeriod: BigInt! # uint256
  round_gameLeaderBoard: Bytes! # address
  round_hasClaimedBySomeone: Boolean! # bool
  gameId: BigInt! # uint256
  gameName: String! # string
  gameLeaderboardInfo: [String!]!
  user: Bytes! # address
  score: BigInt! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type ClaimReward @entity(immutable: true) {
  id: Bytes!
  user: Bytes! # address
  totalClaimedPrize: BigInt!
  round_gameRound: BigInt! # uint256
  round_end: BigInt! # uint256
  round_claimPeriod: BigInt! # uint256
  round_gameLeaderBoard: Bytes! # address
  round_hasClaimedBySomeone: Boolean! # bool
  gameId: BigInt! # uint256
  gameName: String! # string
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type NewRound @entity(immutable: true) {
  id: Bytes!
  user: Bytes! # address
  totalClaimedPrize: BigInt!
  round_gameRound: BigInt! # uint256
  round_end: BigInt! # uint256
  round_claimPeriod: BigInt! # uint256
  round_gameLeaderBoard: Bytes! # address
  round_hasClaimedBySomeone: Boolean! # bool
  gameId: BigInt! # uint256
  gameName: String! # string
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type RedeemTicket @entity(immutable: true) {
  id: Bytes!
  player: Bytes!
  ticketType: BigInt!
  ticketPrice: BigInt!
  gameId: BigInt!
  gameName: String!
  round_gameRound: BigInt! # uint256
  round_end: BigInt! # uint256
  round_claimPeriod: BigInt! # uint256
  round_gameLeaderBoard: Bytes! # address
  round_hasClaimedBySomeone: Boolean! # bool
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type RandomnessRequested @entity(immutable: true) {
  id: Bytes!
  sequenceNumber: BigInt! # uint64
  requester: Bytes! # address
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type RandomnessRevealed @entity(immutable: true) {
  id: Bytes!
  randomNumber: BigInt! # uint256
  revealer: Bytes! # address
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type Winner @entity(immutable: true) {
  id: Bytes!
  winner: Bytes! # address
  amount: BigInt! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type EnterLottoGame @entity(immutable: true) {
  id: Bytes!
  participant: Bytes! # address
  number: BigInt! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type BuyTicket @entity(immutable: true) {
  id: Bytes!
  buyer: Bytes! # address
  ticketType: BigInt! # uint256
  ticketNumber: BigInt!
  amount: BigInt!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type AirdropLottoTickets @entity(immutable: true) {
  id: Bytes!
  players: [String!]! # address
  numberOfTickets: [BigInt!]! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type ClaimLottoTicket @entity(immutable: true) {
  id: Bytes!
  claimer: Bytes! # address
  ticketType: BigInt! # uint256
  number: BigInt!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

```

## How to contribute?
We warmly invite developers of all skill levels to contribute to our open-source project, whether through code, documentation, or community support, to help us build something truly amazing together.

## License
The MIT License (MIT)
<br>
<br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2024 The Scorpion Studio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Developed By
- Blasteens is developed by _The Scorpion Studio_. \
We're a dynamic developer team based in Melbourne, Australia, deeply fascinated by all aspects of dApps. With a firm belief in the future potential of blockchain technology, we are committed to exploring and contributing to this innovative field. Peace ✌️
  <p align="left">
    <img alt="Scorpion Studio" src="public/images/scorpion-studio.png" width="500" >
  </p>
- Also, special thanks to _[Blast](https://blast.io/en)_ !
  <p align="left">
    <img alt="Blast" src="public/images/blast.svg" width="500" >
  </p>
