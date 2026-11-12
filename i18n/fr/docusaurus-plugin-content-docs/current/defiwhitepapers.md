---
sidebar_position: 13
---

# DeFi basée sur la délégation

import Link from '@docusaurus/Link';

[(version pdf, en anglais)](http://werenode.com/documents/WerenodeWhitepaperv09.pdf)

## Auteurs

Thibaut Chessé (thibaut@nomadic-labs.com ), Yves-Michel Leporcher (yves-michel.leporcher@renault.com), Benoît Maïsseu (benoit.maisseu@werenode.com)

## Résumé

Cet article pose les principes d'un système d'investissement décentralisé qui s'appuie sur des
mécanismes innovants de la blockchain Tezos et sur une architecture de smart contracts dédiés. Ses
principaux composants sont le nouveau concept de Continuous Delegation Offering (offre continue par
délégation), combiné à une Continuous Security Reward (récompense continue de sécurité) qui consolide
la valeur du jeton d'investissement. Une organisation autonome décentralisée (DAO) supervise en outre
la gouvernance du jeton. Cette structure décentralisée peut servir à tout investissement dans un projet
générateur de revenus : une part de ces revenus permet, grâce à un smart contract, de racheter ou de
détruire automatiquement des jetons, ce qui soutient la valeur du jeton d'investissement.

## Introduction
Ce document décrit l'architecture des contrats proposés par Werenode pour son jeton d'investissement, y compris le contrat qui contrôle l'émission du Werecoin lui-même (le jeton de Werenode) grâce à
un concept propre à la blockchain Tezos : la délégation de baking <Link to='/docs/defiwhitepapers/#references'>[5]</Link>. Nous décrivons aussi comment le
flux de revenus est relié au jeton d'investissement, et le smart contract qui gère
le lien avec les revenus du projet pour lequel l'investissement est collecté.

##  Le jeton d'investissement, véritable instrument de confiance
Les levées de fonds en jetons sont souvent associées à un risque élevé pour les investisseurs. De plus, les décideurs
sont rarement eux-mêmes impliqués directement dans le projet, ce qui pose une vraie question de confiance. Nous
proposons une architecture de contrats entièrement décentralisée qui permet aux investisseurs de sécuriser leurs actifs.

L'architecture décrite ci-après est conçue pour apporter des garanties aux utilisateurs sur le projet
pour lequel les fonds sont levés. Ces garanties assurent qu'aucun capital ne peut être perdu et consolident
le mécanisme de récompense grâce à des smart contracts formellement vérifiés.

## Continuous Delegation Offering (offre continue par délégation)
Avant tout, et c'est une innovation, l'outil de baking délégué de Tezos est utilisé pour introduire le jeton
d'investissement en toute sécurité. En effet, grâce à l'algorithme de consensus par preuve d'enjeu (proof of stake), les détenteurs de tez
peuvent être récompensés lorsqu'ils délèguent leurs droits de baking à un autre baker <Link to='/docs/defiwhitepapers/#references'>[3]</Link>. En échange, le baker
délégué perçoit une partie des récompenses de baking. Par exemple, Werenode, membre de la communauté
des bakers Tezos, récompensera en jetons Werecoin (WRC) les détenteurs des tez qui lui sont délégués,
et introduira ainsi ces jetons. Grâce à ces Continuous Delegation Offerings (CDO),
le WRC pourra être introduit en douceur et progressivement, sans concentration ni
dilution ultérieure. Ce mécanisme d'introduction suppose que les services financés soient liés à
une installation de baker. Le processus natif du protocole de baking de Tezos permettra de contrôler l'émission,
tout en contribuant à la décentralisation du réseau <Link to='/docs/defiwhitepapers/#references'>[1]</Link>.

La récompense de délégation sera en effet versée en tout ou partie au détenteur des tez en
WRC. Le ratio XTZ/WRC de la récompense de baking du délégant peut être choisi selon
son profil d'investisseur. Dans tous les cas, la pleine liquidité et la valeur en capital des tez
délégués sont garanties. Cela permet de mieux maîtriser le risque d'investissement et répond au besoin
d'émission décentralisée, l'une des clés d'une introduction de jeton réussie. L'émission d'un jeton
comporte généralement un risque de concentration, mais ce processus garantit une opportunité équitable et transparente aux parties prenantes potentielles.

La valeur de marché du WRC sera fixée par un mécanisme de marché automatisé (une plateforme
d'échange décentralisée existante comme Dexter <Link to='/docs/defiwhitepapers/#references'>[2]</Link> ou QuipuSwap, ou une nouvelle plateforme comparable). Le nombre de WRC émis à chaque cycle de délégation sera ajusté à la valeur WRC/XTZ du moment.

Le volume de jetons dont l'émission est prévue doit être planifié avec prudence. Il doit être relié aux revenus générés par une tranche
d'investissement. À chaque nouvelle tranche d'investissement, la quantité de jetons à réémettre, en fonction des revenus prévus de
l'investissement, sera déterminée par le vote d'une autorité décentralisée.

<img
  src={require('@site/docs/assets/wp1.png').default}
  alt="Mécanisme de Continuous Delegation Offering"
  style={{ width : '80%', height : '80%' }}
/>

## Continuous Security Reward (récompense continue de sécurité)
Un mécanisme de destruction (burn) de jetons sera mis en place pour renforcer la valeur du jeton. Le nombre de
jetons détruits sera déterminé par un processus autonome lié à l'activité réelle du service
adossé. Un mécanisme innovant sera intégré au smart contract du jeton WRC : chaque utilisation du WRC comme jeton
de traçabilité ou de paiement déclenchera le reversement d'un pourcentage (n) de la valeur du service tracé.
Ce montant de WRC sera détruit.

Cela permettra de soutenir la valeur du jeton, et donc de récompenser les investisseurs, tout en protégeant
sa liquidité. Ce processus, extension améliorée de la Continuous Security Offering, est plus
justement appelé Continuous Security Reward. Il assure un second principe vertueux
de consolidation de la valeur ajoutée du jeton, et contribue aussi à la valeur de l'écosystème Tezos.

Au lieu de simplement détruire ce pourcentage n de jetons, une plus grande quantité de WRC pourrait aussi
être rachetée automatiquement au prix du marché par l'entité qui gère le flux de revenus, avec des
frais servant à récompenser le fournisseur de liquidité de la plateforme d'échange décentralisée
<Link to='/docs/defiwhitepapers/#references'>[4]</Link>. Cela aurait
l'avantage supplémentaire de soutenir la paire XTZ/WRC sur la plateforme d'échange décentralisée. Ce processus
alternatif ne pourrait toutefois être utilisé que s'il ne réintroduit pas un risque d'accumulation de jetons
menaçant leur valeur de marché. L'inconvénient habituel serait en effet de créer une nouvelle
réserve de jetons susceptible d'être revendue trop vite (ou simplement de susciter de la méfiance). Il
devrait donc s'accompagner d'un processus clair de réintroduction des jetons rachetés (par exemple
en les redistribuant comme jetons de fidélité). En particulier, si ces jetons rachetés
sont réintroduits par un mécanisme de cashback vers les clients du service
adossé, cet inconvénient potentiel disparaîtrait. Un cashback du même pourcentage n supprimerait
entièrement le risque de réserve. Une stratégie mixte est aussi possible : une quantité de jetons rachetés
liée au pourcentage de cashback offert sur le service, et l'excédent de jetons
détruit.

En tant que jeton de traçabilité (et, à la marge, de paiement), le WRC mesure tout le flux de services et en affecte n % au mécanisme de récompense :

<img
  src={require('@site/docs/assets/wp2.png').default}
  alt="Mécanisme de Continuous Security Reward"
  style={{ width : '60%', height : '60%' }}
/>

Ce principe de Continuous Security Reward (CSR) apportera des garanties tout au long du cycle de vie du jeton,
assurera sa pérennité et récompensera ses détenteurs. Grâce à cette architecture de smart contracts, le renforcement du jeton dépendra directement de la qualité cumulée des projets
et permettra de financer les nouveaux services à venir, avec de possibles anticipations vertueuses.

## Remise sur les services vendus par le projet financé
Le jeton WRC sera accepté en paiement des services proposés par les projets financés.
Par exemple, dans notre première mise en œuvre, les Werecoins serviront à la recharge des véhicules électriques. Le
jeton sera accepté à sa valeur de marché et donnera droit à des remises sur les services adossés.
Bien sûr, on s'attend à ce qu'une part marginale seulement des paiements se fasse directement en WRC, au moins
au début. Il faut donc garder à l'esprit que le premier usage du
jeton sera d'apporter traçabilité, désintermédiation et interopérabilité à tous les services qui peuvent
tirer profit de la décentralisation. C'est pourquoi la part des services non payés directement en WRC sera
tracée proportionnellement grâce au jeton, ce qui déclenchera le mécanisme de récompense.

## Opportunité de rendement grâce à l'introduction sur des DEX
Le WRC pourra être échangé sur des plateformes d'échange décentralisées ou sur une nouvelle plateforme comparable. La paire XTZ/WRC sera la première proposée.

## Organisation autonome décentralisée
Un mécanisme classique d'organisation autonome décentralisée (DAO) sera associé au jeton WRC.
Il permettra une gouvernance distribuée, à laquelle des propositions seront soumises et votées. Grâce à
cette gestion décentralisée du jeton, les principales décisions seront prises dans l'intérêt des
investisseurs et des projets financés. Les décisions de la DAO porteront typiquement sur la gestion de la liquidité et
le cycle de vie du jeton (blocage, destruction, rachat…). Par exemple, les votes de l'organisation
autonome décentralisée permettront typiquement d'ajuster la part des revenus du projet
qui sera détruite.

## Processus itératif pour les nouveaux investissements
La valeur utilisée pour soutenir le cours du jeton d'investissement (s) est cumulée.
Lorsque cette valeur cumulée ∑s atteint l'investissement total initial I multiplié par p (p étant un retour sur investissement),
un processus de sortie progressive du soutien au jeton est engagé, en abaissant progressivement le
pourcentage n.

En règle générale, les conditions qui peuvent déclencher l'introduction d'une nouvelle émission de jetons
sont :
1. la clôture du précédent processus de soutien (pI a été atteint) ;
2. un partenariat ou une tranche d'investissement qui ouvre un nouveau marché au flux du pourcentage de récompense ;
3. la valeur de marché du WRC a déjà atteint pI (∑ 𝑣 > 𝑝𝐼, v étant la valeur de marché du jeton).

## Abréviations

| Sigle | Définition |
| -- | -- |
| DBDeFi | Delegation Based Decentralized Financing (financement décentralisé basé sur la délégation) |
| CDO    | Continuous Delegated Offering (offre continue par délégation) |
| CSO    | Continuous Security Offering (offre continue de sécurité) |
| CSR    | Continuous Security Reward (récompense continue de sécurité) |
| DEX    | Decentralized EXchange (plateforme d'échange décentralisée) |
| WRC    | Werecoin, exemple de jeton émis grâce à une CDO |
| ROI    | Return On Investment (retour sur investissement) |
| DAO    | Decentralized Autonomous Organization (organisation autonome décentralisée) |
| XTZ    | La cryptomonnaie de Tezos |

## Références {#references}
#### [1] Ariel Gabizon Iddo Bentov and Alex Mizrahi. [Cryptocurrencies without proof of work. 2014](http://www.cs.technion.ac.il/~idddo/CoA.pdf).
#### [2] camlcase.io. [Dexter Documentation. 2020](https://dexter.exchange/docs/dexterintro/).
#### [3] Tezos Project. [Formal specification of the tezos smart contract language. 2014](https://tezos.com/pages/tech.html).
#### [4] Uniswap Project. [Uniswap V2 Core. 2020](https://uniswap.org/whitepaper.pdf).
#### [5] ASCS on behalf of Tezos Foundation. [Tezos Deep Dive Deck. 2020](https://asc-s.de/en/news/152/first-results-of-envited-ecosystem-work-group-pulished/)

## Avertissement
Ce document est fourni à titre d'information générale uniquement. Il ne constitue ni un conseil en investissement,
ni une recommandation ou une sollicitation d'achat ou de vente d'un quelconque investissement, et ne doit pas servir
à évaluer l'opportunité d'une décision d'investissement. Il ne doit pas être utilisé comme conseil
comptable, juridique ou fiscal, ni comme recommandation d'investissement. Ce document reflète les opinions actuelles
de ses auteurs ; il n'est pas publié au nom de Werenode ou de ses sociétés affiliées et ne reflète pas nécessairement
les opinions de Werenode, de ses sociétés affiliées ou des personnes qui y sont associées. Les opinions
exprimées ici peuvent évoluer sans que ce document soit mis à jour.
