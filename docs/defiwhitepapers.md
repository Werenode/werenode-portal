---
sidebar_position: 5
---

# Delegation Based DeFi

import Link from '@docusaurus/Link';

[(pdf version)](http://werenode.com/documents/WerenodeWhitepaperv09.pdf)

## Authors

Thibaut Chessé (thibaut@nomadic-labs.com ), Yves-Michel Leporcher (yves-michel.leporcher@renault.com), Benoît Maïsseu (benoit.maisseu@werenode.com)

## Abstract

This technical whitepaper establishes the main principles of a decentralized investment system using
Tezos blockchain innovative mechanisms and an architecture of dedicated smart contracts. The
main components of this system include the new Continuous Delegation Offering concept combined
with a Continuous Security Reward allowing to consolidate the value of the investment token.
Additionally, a Decentralized Autonomous Organization is used to overview the token governance.
This decentralized structure can be used for any investment in the development of a project that
will generate revenues in a way that allows a share of this revenue in tokens to be bought back or
burned automatically thanks to a smart contract, thus sustaining the value of the investment token.

## Introduction
This document describes the architecture of Werenode’s proposed investment token contracts, including the contract that controls the emission of Werecoin itself (Werenode’s token) thanks to
a specific concept of Tezos blockchain: the baking delegation <Link to='/docs/defiwhitepapers/#references'>[5]</Link>. We will also describe how the
revenue flow is connected to the investment token and the smart contract that allows to manage
the link with the revenues of the project for which the investment is gathered.

##  Investment token as a real instrument of trust
Token fundraising is often associated with high-risk for investors. Furthermore, the decision makers
are themselves rarely involved directly in the project, thus raising a critical question of trust. We
propose a fully decentralized contract architecture to allow investors to secure their assets.

The architecture thereafter described is built to bring warranties to users regarding the project
for which the funds are raised. These warranties ensure that no capital can be lost and consolidate
the reward process thanks to the use of formally verified smart contracts.

## Continuous Delegation Offering
First and foremost, as an innovation, the Tezos tool of delegated baking is used to introduce safely
the investment token. Indeed, thanks to the proof of stake consensus algorithm, Tezos owners can
be rewarded when they lend their baking rights to another baker <Link to='/docs/defiwhitepapers/#references'>[3]</Link>. In exchange, the delegated
baker will receive a part of the baking fee. As an example, Werenode, a member of Tezos baker
community, will reward the owners of the tez which are delegated to itself with Werecoin tokens
(WRC), hence introducing them. With this so-called Continuous Delegation Offerings (CDOs),
it will be possible to introduce smoothly and progressively WRC, without any concentration and
later dilution. This introduction mechanism requires that the financed services are bound to a
baker setup. The native process of the Tezos baking protocol will serve to control the issuance,
while contributing to the decentralization of the network <Link to='/docs/defiwhitepapers/#references'>[1]</Link>.

Indeed, the reward for the delegation will be partly or totally paid to the owner of the tez in
WRC. The ratio XTZ/WRC for the baking reward of the delegate can be chosen, depending on the
delegate investment profile choice. In any case, the full liquidity and capital value of the delegated
Tez is ensured. This allows a better control of investment risk and answers to the decentralized
issuance need, which is one of the keys of a successful token introduction. Token issuance usually
raises a risk of concentration but this process of emission guarantees a fair and transparent opportunity for potential stakeholders.

The market value of the WRC will be fixed by an automated market mechanism (whether an
existing decentralized exchange like Dexter <Link to='/docs/defiwhitepapers/#references'>[2]</Link> or QuipuSwap or a new relevant comparable exchange). The emitted number of WRC for each cycle of delegation will be adjusted to the current WRC/XTZ value.

The amount of planned tokens for issuance has to be cautiously scheduled. It needs to be connected to the revenue that a tranche of investment is generating. Each time a new tranche of
investment is created, the amount of token to be reissued, in relation with the planned investment
revenue will be determined by a decentralized authority vote.

<img
  src={require('./assets/wp1.png').default}
  alt="Continuous Delegation Offering mechanism"
  style={{ width : '80%', height : '80%' }}
/>

## Continuous Security Reward
A coin burning process will be implemented to strengthen the value of the token. The number of
tokens that will be destroyed will be determined by an autonomous process linked to the actual
activity of the collateral business. An innovative mechanism will be built in WRC token’s smart
contract: each usage of WRC as traceability token or payment token will trigger the back reward
of a percentage (n) of the value of the service tracked. This amount of WRC will be burnt.

This will allow to support the value of the token thus rewarding the investors, also protecting the
token liquidity. This process as an enhanced extension of the Continuous Security Offering is more
accurately named as a Continuous Security Reward system. This allows to ensure a second virtuous
principle of consolidated added value for the token, also contributing to the Tezos ecosystem value.

Alternatively, instead of simply burning this percentage n of tokens, a larger amount of WRC could
be bought back automatically at market price by the entity managing the revenue flow, with a
fee used to reward the liquidity provider of the decentralized exchange mechanism
<Link to='/docs/defiwhitepapers/#references'>[4]</Link>. This would
offer the additional advantage of supporting the decentralized exchange XTZ/WRC pair. But this
alternate process could be used as long as it doesn’t reintroduce a risk of token accumulation
endangering its market value. Indeed, in this case, the usual drawback would be to create a new
reserve of tokens that could be sold too quickly (or could just create a distrust risk). Therefore
it should be linked with a clear reintroduction process of the bought back tokens (through the
redistribution of these tokens as fidelity tokens for example). Especially, if these bought back
tokens are reintroduced thanks to a cashback mechanism towards the customer of the collateral
service, this potential disadvantage would be negated. A cashback of the same percentage n would
fully negate the potential reserve risk. A mixed strategy is also possible, with a bought back
amount of tokens linked to the cashback percentage offered on the service and the excess tokens to
be destroyed.

As traceability token (and marginally payment token), WRC measures all service flow and routes a n% for the reward mechanism:

<img
  src={require('./assets/wp2.png').default}
  alt="Continuous Delegation Offering mechanism"
  style={{ width : '60%', height : '60%' }}
/>

This Continuous Security Reward (CSR) principle will provide warranties along the token life cycle,
ensuring its sustainability and rewarding the token holders. Thanks to this smart contract architecture, the strengthening of the token will directly depend on the accumulated quality of the projects
and allow to finance the new services to come, potentially benefiting from virtuous anticipations.

## Rebate on services sold by the financed project
The WRC token will be accepted as payment for the services proposed by the financed projects.
For example, in our first implementation, Werecoins will be used for electric vehicles charging. The
token will be accepted at current market value and give access to rebates on the collateral services.
Of course, a marginal share of the payment is expected to be made directly in WRC, at least at
the beginning of the process. Therefore, it’s important to keep in mind that the first usage of the
token will be to give traceability, disintermediation and interoperability to all services for which
decentralization can be beneficial. This is why the share of services not directly paid in WRC will
be tracked proportionally thanks to the token, thus triggering the reward mechanism.

## Yield opportunity thanks to DEX introduction
The WRC will be tradable thanks to decentralized exchanges platforms or a new relevant comparable exchange. The XTZ/WRC pair will be the first proposed.

## Decentralized Autonomous Organization
A classical mechanism of Decentralized Autonomous Organization will be linked to the WRC token
allowing a distributed governance to which proposals will be submitted and voted. Thanks to
this Decentralized Token Management the main decision will be taken in the best interest of the
investors and the financed projects. DAO decisions will typically be liquidity management and
token life cycle (lock-up, burning, redeeming…). As an example, the votes of the decentralized
autonomous organization will typically allow the adequate tuning of the share of project revenue
that will be burned.

## Iterative process for new investments
The amount of value that is used to support the rate of the investment token (s) is accumulated.
When this cumulative value ffs reaches the initial total investment I multiplied by p (p being a ROI)
a landing process of the reward support to the token will be initiated, lowering progressively the
percentage n.

As a general rule, the possible triggering conditions for the introduction of a new roll of tokens
will be:
1. The closure of the previous backward support process (pI has been reached)
2. a partnership or investment tranche that opens a new market for the reward percentage flow
3. the market value of WRC has already reached pI (∑ 𝑣 > 𝑝𝐼, v being the market value of the token)

## Abbreviations

| Acronym | Definition |
| -- | -- |
| DBDeFi | Delegation Based Decentralized Financing |
| CDO    | Continuous Delegated Offering |
| CSO    | Continuous Security Offering |
| CSR    | Continuous Security Reward |
| DEX    | Decentralized EXchange |
| WRC    | Werecoin, an example of a token that would be emitted thanks to CDO |
| ROI    | Return On Investment |
| DAO    | Decentralized Autonomous Organization |
| XTZ    | Tezos coin |

## References
#### [1] Ariel Gabizon Iddo Bentov and Alex Mizrahi. [Cryptocurrencies without proof of work. 2014](http://www.cs.technion.ac.il/~idddo/CoA.pdf).
#### [2] camlcase.io. [Dexter Documentation. 2020](https://dexter.exchange/docs/dexterintro/).
#### [3] Tezos Project. [Formal specification of the tezos smart contract language. 2014](https://tezos.com/pages/tech.html).
#### [4] Uniswap Project. [Uniswap V2 Core. 2020](https://uniswap.org/whitepaper.pdf).
#### [5] ASCS on behalf of Tezos Foundation. [Tezos Deep Dive Deck. 2020](https://asc-s.de/en/news/152/first-results-of-envited-ecosystem-work-group-pulished/)

## Disclaimer
This paper is for general information purposes only. It does not constitute investment advice
or a recommendation or solicitation to buy or sell any investment and should not be used in
the evaluation of the merits of making any investment decision. It should not be relied upon for
accounting, legal or tax advice or investment recommendations. This paper reflects current opinions
of the authors and is not made on behalf of Werenode or its affiliates and does not necessarily reflect
the opinions of Werenode, its affiliates or individuals associated with Werenode. The opinions
reflected herein are subject to change without being updated.
