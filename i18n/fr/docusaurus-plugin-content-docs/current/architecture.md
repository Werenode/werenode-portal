---
sidebar_position: 2
---

# Architecture du Système Werenode​

## Aperçu​
Werenode est un écosystème décentralisé de recharge de véhicules électriques qui exploite la technologie blockchain pour offrir une solution transparente, sécurisée et évolutive aux utilisateurs de véhicules électriques et aux opérateurs de stations de recharge. La plateforme Werenode comprend des applications mobiles, un backend basé sur le cloud, un réseau blockchain pour les transactions et un portail web open-source pour la gestion des équipements de recharge (EVSE).​

## Composants du Système​
L'architecture du système Werenode se compose de plusieurs composants clefs :​

-1. **Application Mobile (React Native)​**

-2. **Portail Web (werenode-portal basé sur Docusaurus)​**

-3. **Application Membre (Angular)​**

-4. **Services Backend​**

-5. **Réseau Blockchain​**

-6. **Couche OCPP (C#)​**

-7. **Couche OCPI​**

-8. **Couche MQTT​**

-9. **Gestionnaire EVSE​**

-10. **Application Alternative DEFev​**

-11. **Intégration de la carte des EVSE**
​
### 1. Application Mobile (React Native)​

L'application mobile Werenode est développée en React Native pour offrir une expérience multiplateforme aux utilisateurs Android et iOS. Elle permet aux conducteurs de véhicules électriques de localiser des stations de recharge disponibles, d'initier et de gérer des sessions de recharge, et d'effectuer des paiements via des transactions blockchain.​

**Fonctionnalités clefs**

-**Découverte d'EVSE** : L'application fournit une interface cartographique permettant aux utilisateurs de localiser des stations de recharge à proximité.​

-**Intégration de Portefeuille** : Support intégré pour les portefeuilles blockchain afin d'effectuer des paiements sécurisés.​

-**Gestion des Sessions** : Les utilisateurs peuvent surveiller leurs sessions de recharge en temps réel.​

### 2. Portail Web (werenode-portal basé sur Docusaurus)
​
Le portail Werenode est une interface web pour la gestion des EVSE et la fourniture de documentation aux développeurs et aux utilisateurs. Il est construit avec Docusaurus pour assurer une navigation facile, une maintenabilité et une évolutivité.​

**Fonctionnalités clefs**

-**Hub de Documentation** : Inclut des guides complets pour les développeurs, les propriétaires de stations de recharge et les utilisateurs.​
-**Gestion des EVSE** : Les opérateurs de stations de recharge peuvent enregistrer, mettre à jour et surveiller leurs unités EVSE.​
-**Intégration de la Carte EVSE** : La carte EVSE de l'application mobile React Native a été intégrée au portail pour offrir une expérience unifiée de visualisation des stations de recharge disponibles.​

### 3. Application Membre (Angular)
​
L'Application Membre est développée en Angular et fournit des informations détaillées sur les sessions de recharge pour les membres de Werenode. Elle offre un moyen pratique pour les utilisateurs de gérer leurs activités de recharge et d'obtenir des insights sur leur consommation d'énergie.​

**Fonctionnalités clefs**

-**Aperçu des Sessions de Recharge** : Affiche des informations sur les sessions de recharge en cours et passées, y compris l'énergie consommée, la durée et le coût.​
-**Insights Utilisateur** : Offre des analyses et des insights sur le comportement de recharge, aidant les utilisateurs à optimiser leurs habitudes de recharge.​
-**Gestion de Compte** : Permet aux utilisateurs de gérer leurs profils, de consulter l'historique des transactions et d'accéder aux documents pertinents.​

### 4. Services Backend
​
Les services backend fournissent l'infrastructure nécessaire pour gérer les données des utilisateurs, les informations des stations de recharge et d'autres logiques métier essentielles. Ils consistent en une API RESTful et une architecture de microservices, déployés en utilisant une infrastructure cloud.​

**Composants clefs**

-**Authentification des Utilisateurs** : Gère les comptes utilisateurs et traite l'authentification via OAuth2 et d'autres protocoles sécurisés.​
-**Gestion des Données EVSE** : Stocke les informations sur les stations de recharge, leur statut et leur disponibilité.​
-**API de Session de Recharge** : Traite les demandes de l'application mobile pour démarrer, arrêter et surveiller les sessions de recharge.​

### 5. Réseau Blockchain
​
La plateforme Werenode utilise la technologie blockchain pour permettre des transactions décentralisées et transparentes pour les sessions de recharge.​

**Éléments clefs**

-**Smart Contracts** : Implémentés en Solidity, ces contrats gèrent les paiements, les interactions utilisateur et les soldes de crédits énergétiques.​
-**Paiements en Tokens** : Les paiements pour les sessions de recharge sont gérés via un système de tokens basé sur la blockchain, assurant des transactions sécurisées, rapides et à faible coût.​
-**Transparence des Données** : Les données de transaction sont enregistrées sur la chaîne, fournissant des enregistrements vérifiables et infalsifiables.​

### 6. Couche OCPP (C#)
​
La Couche Open Charge Point Protocol (OCPP), développée en C#, fournit une norme de communication entre les stations de recharge (EVSE) et le serveur backend. Cette couche assure l'interopérabilité entre divers dispositifs EVSE, permettant une communication efficace et une gestion de l'infrastructure de recharge.​

**Fonctionnalités clefs**

-**Communication des Dispositifs** : Facilite une communication bidirectionnelle fiable avec les stations de recharge.​
-**Gestion à Distance** : Permet la configuration, la surveillance et le contrôle à distance des points de recharge.​
-**Évolutivité** : Prend en charge l'intégration à grande échelle des stations de charge de différents fabricants.​

### 7. Couche OCPI
La couche Open Charge Point Interface (OCPI) permet une intégration transparente et l'itinérance entre différents réseaux de recharge. Cela permet aux conducteurs de véhicules électriques d'accéder aux services de recharge et de les payer auprès de différents opérateurs tout en maintenant une expérience cohérente.​

**Caractéristiques clefs**

-**Interopérabilité** : Fournit une interface standard pour la communication entre les fournisseurs de services.​
-**Facturation et règlements** : Facilite la facturation inter-opérateurs, assurant une expérience de paiement fluide pour les utilisateurs.​
-**Partage de données en temps réel** : Partage la disponibilité des stations de charge et les tarifs en temps réel entre les réseaux.​

### 8. Couche MQTT
La couche MQTT est utilisée pour gérer les prises connectées à l'IoT, en particulier pour les dispositifs de charge lente. MQTT (Message Queuing Telemetry Transport) est un protocole léger idéal pour la communication machine à machine (M2M) dans l'Internet des objets.​

**Caractéristiques clefs**

-**Connectivité IoT** : Fournit une connectivité pour les prises de charge lente et autres dispositifs IoT dans l'écosystème.​
-**Faible bande passante** : Fonctionne efficacement avec une utilisation minimale des données, adapté aux réseaux intermittents ou à faible puissance.​
-**Surveillance en temps réel** : Permet la transmission de données en temps réel à partir des chargeurs lents, qui peuvent être affichées dans l'application mobile ou le portail web.​

### 9. Gestionnaire EVSE
Le Gestionnaire EVSE est l'API de session de charge responsable de l'orchestration et de l'automatisation de toutes les transactions blockchain. Il sert de moteur logique central qui intègre les interactions de l'utilisateur avec le réseau blockchain et le matériel EVSE.​

**Caractéristiques clefs**

-**Automatisation des sessions de charge** : Gère le cycle de vie complet d'une session de charge, de l'initiation à la finalisation.​
-**Intégration blockchain** : Gère automatiquement la création et l'exécution des transactions blockchain, réduisant la complexité pour les utilisateurs finaux.​
-**Interaction utilisateur et opérateur** : Fait le lien entre l'application utilisateur, le backend et l'infrastructure de charge, rationalisant le processus global.​

### 10. Application alternative DEFev

DEFev est une application web entièrement décentralisée qui utilise la technologie blockchain pour la gestion de la recharge des véhicules électriques et des transactions. Elle est conçue pour offrir une expérience purement décentralisée, en tirant parti de portefeuilles blockchain tels que MetaMask.​

**Caractéristiques clefs**

-**Intégration MetaMask** : Les utilisateurs peuvent interagir directement avec la blockchain via MetaMask, garantissant que toutes les transactions sont décentralisées et transparentes.​
-**Interface Web3** : DEFev est implémentée en utilisant Web3.js pour fournir une connectivité directe au réseau Ethereum, permettant des interactions peer-to-peer complètes sans serveurs intermédiaires.​
-**Contrôle décentralisé** : L'initiation des sessions de charge et les paiements sont entièrement gérés via des contrats intelligents, offrant une autonomie et une sécurité maximales aux utilisateurs.​

### 11. Intégration de la carte des EVSE

Pour créer une expérience unifiée et transparente pour les utilisateurs, la carte EVSE de l'application mobile a également été intégrée dans le portail werenode basé sur Docusaurus. Cette intégration garantit que le portail web peut servir de point d'interaction pour les utilisateurs cherchant à localiser et en savoir plus sur les stations de charge sans avoir besoin de l'application mobile.​

**Caractéristiques clefs**

Carte interactive : Affiche toutes les stations de charge disponibles, leur statut et les détails pertinents.​
Filtrage et recherche : Les utilisateurs peuvent filtrer les stations selon divers critères tels que la disponibilité, les tarifs et la vitesse de charge.​
Expérience cohérente : L'intégration avec les mêmes services backend que l'application mobile assure une expérience de données cohérente sur toutes les plateformes.​

## Technologies utilisées

-**Frontend** :
  -Mobile : React Native​
  -Portail web : Docusaurus, React​
  -Application membre : Angular​
  -DEFev : React, Web3.js, MetaMask​
-**Backend** : Node.js, Express.js, MongoDB, Docker (pour les microservices)​
-**Blockchain** : Solidity (contrats intelligents), réseau compatible Ethereum​
-**Protocoles** :
  -OCPP (C#) pour la communication avec les stations de charge​
  -OCPI pour l'interopérabilité des réseaux​
  -MQTT pour les prises de charge lente connectées à l'IoT​
Hébergement et déploiement : AWS (EC2, S3), Kubernetes pour l'orchestration des microservices​
APIs : API REST pour l'intégration mobile et web, GraphQL pour des requêtes de données optimisées​

## Flux de données
-Interaction utilisateur : Un utilisateur interagit avec l'application mobile, le portail werenode, l'application membre ou l'application web DEFev pour trouver une station de charge ou gérer une session.​
-Requête API : Cette interaction déclenche une requête API vers le backend pour récupérer les données de l'EVSE ou exécuter une action de charge.​
-Gestionnaire EVSE : Le gestionnaire EVSE automatise les transactions blockchain, interagissant avec les smart contracts pour gérer le paiement.​
-Transaction blockchain : Si un paiement est requis, l'utilisateur interagit avec le portefeuille intégré (MetaMask ou autres) pour exécuter une transaction blockchain.​
-Contrôle de l'EVSE : Le backend communique via la couche OCPP ou MQTT pour démarrer ou arrêter le processus de charge.​
-Mise à jour des données : Les données de la session de charge sont mises à jour dans la base de données et, le cas échéant, enregistrées sur la blockchain.​

## Feuille de route future
-Analyses de données avancées : Ajouter des analyses prédictives pour suggérer des moments de charge optimaux en fonction du comportement de l'utilisateur et de la demande du réseau.​
-Identité décentralisée : Mettre en œuvre une identité décentralisée (DID) pour l'authentification des utilisateurs afin d'améliorer la confidentialité et la sécurité.​
-Interopérabilité inter-chaînes : Explorer des options de paiement inter-chaînes pour prendre en charge plusieurs réseaux blockchain.
