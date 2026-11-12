# Questions fréquentes (FAQ)

Bienvenue sur la FAQ de Werenode ! Vous trouverez ici les réponses aux questions les plus courantes sur la plateforme Werenode, la recharge des véhicules électriques et l'intégration de la blockchain.

## Questions générales

### 1. Qu'est-ce que Werenode ?
Werenode est un écosystème décentralisé de recharge de véhicules électriques qui utilise la blockchain pour rendre les sessions de recharge sûres, transparentes et efficaces. Il relie conducteurs de VE, opérateurs de bornes et fournisseurs de services grâce à des applications mobiles, un portail web et des smart contracts sur la blockchain.

### 2. Quels sont les avantages de Werenode pour les conducteurs de VE ?
Werenode permet aux conducteurs de VE de trouver facilement les bornes disponibles, de lancer une recharge et de payer de façon sécurisée grâce à la blockchain. La plateforme offre de la transparence et une expérience homogène sur plusieurs réseaux de recharge.

### 3. Comment partager mon équipement de recharge ?

- Vérifiez qu'il fait partie des équipements validés :
  - tout équipement OCPP 1.6
  - une prise WiFi connectée Shelly
  - une prise WiFi compatible Netatmo
  - une prise WiFi compatible eWeLink

Remplissez ensuite le formulaire d'inscription ci-dessous et envoyez un e-mail à support@werenode.com pour plus de détails :
> https://forms.gle/GtezftCRLUKy5n2E7

### 4. Comment me désinscrire après avoir créé un compte ?
Commencez par vider vos portefeuilles (par exemple en convertissant tous vos avoirs en WRC et en les envoyant vers une adresse externe). Envoyez ensuite un e-mail à support@werenode.com <u>depuis l'adresse e-mail</u> utilisée pour votre inscription dans l'application, avec pour objet « Delete my account ». Comptez 2 à 3 jours pour le traitement.

### 5. Quelle est la différence entre l'application mobile, le portail web et la Member App ?
- **Application mobile** : développée en React Native, elle permet aux conducteurs de VE de trouver une borne, de lancer et de gérer leurs recharges depuis leur smartphone.
- **Portail web** : développé avec Docusaurus, il propose des ressources aux développeurs, aux propriétaires de bornes et aux utilisateurs pour gérer les bornes (EVSE) et trouver la documentation utile.
- **Member App** : développée en Angular, elle donne aux membres inscrits de Werenode des informations sur leurs sessions de recharge, comme le détail de leur consommation et des indicateurs d'usage.

## Questions techniques

### 5. Comment fonctionne l'intégration de la blockchain ?
La plateforme Werenode utilise la blockchain pour gérer les paiements et les transactions des sessions de recharge. Des smart contracts écrits en Solidity gèrent les paiements et les crédits d'énergie, et fournissent un enregistrement sécurisé et infalsifiable de toutes les opérations.

### 6. Qu'est-ce que l'EVSE Manager ?
L'**EVSE Manager** est une API de sessions de recharge qui automatise toutes les transactions sur la blockchain et simplifie ainsi le parcours des utilisateurs. Il interagit avec les smart contracts pour déclencher les paiements, gérer les sessions et sécuriser les échanges avec les bornes.

### 7. À quoi sert la couche OCPP ?
La **couche OCPP**, développée en C#, assure la communication entre les bornes de recharge et le serveur. Elle garantit une connexion fiable et efficace entre le système Werenode et les bornes (EVSE).

### 8. Puis-je utiliser mon portefeuille MetaMask avec Werenode ?
Oui, Werenode propose une autre application web décentralisée, **DEFev**, entièrement compatible avec MetaMask. Elle permet de gérer directement ses transactions avec un portefeuille blockchain, de façon entièrement décentralisée.

### 9. Quels protocoles Werenode utilise-t-il pour garantir l'interopérabilité ?
Werenode utilise plusieurs protocoles pour garantir l'interopérabilité entre bornes et réseaux de recharge :
- **OCPP (Open Charge Point Protocol)** pour la communication entre les bornes et les systèmes centraux.
- **OCPI (Open Charge Point Interface)** pour l'intégration entre réseaux de recharge.
- **MQTT** pour la gestion des prises connectées (IoT), notamment pour la recharge lente.

## Utilisation et dépannage

### 10. Comment lancer une session de recharge ?
Vous pouvez lancer une session de recharge depuis l'application mobile Werenode :
1. **Trouvez une borne** : utilisez la carte pour trouver une borne à proximité.
2. **Lancez la recharge** : touchez la borne et sélectionnez « Start Session ».
3. **Paiement** : confirmez le paiement avec votre portefeuille blockchain intégré.

Vous pouvez aussi utiliser la **Member App** ou **DEFev** pour gérer vos recharges depuis le web.

### 11. Je n'arrive pas à trouver une borne sur la carte. Que faire ?
Vérifiez que l'application a l'autorisation d'accéder à votre position. Si le problème persiste, actualisez la carte ou vérifiez votre connexion Internet. Vous pouvez aussi consulter le **portail Werenode** pour plus d'informations sur les bornes.

### 12. Comment consulter mes anciennes sessions de recharge ?
Vous pouvez consulter vos anciennes sessions dans la **Member App** ou dans l'**application mobile**, en allant dans votre profil puis « Charging History ». Vous y trouverez toutes les données utiles de chaque session : consommation, durée et coût.

## Sécurité et confidentialité

### 13. Werenode est-il sécurisé ?
Werenode s'appuie sur la blockchain pour sécuriser les transactions. Tous les paiements passent par des smart contracts, et l'authentification des utilisateurs repose sur des protocoles standards du secteur. Des solutions d'identité décentralisée sont également à l'étude pour renforcer encore la confidentialité et la sécurité.

### 14. Que fait Werenode de mes données ?
Werenode ne collecte que les données nécessaires à la bonne gestion des sessions de recharge. Les données des utilisateurs sont stockées de façon sécurisée et ne sont jamais partagées avec des tiers sans consentement. Les transactions sur la blockchain garantissent que les informations financières restent infalsifiables.

## Évolutions à venir

### 15. Quels sont les projets de Werenode pour l'avenir ?
Werenode prévoit de mettre en place des analyses de données avancées pour proposer des suggestions de recharge prédictives, d'étudier des paiements multichaînes compatibles avec plusieurs blockchains, et d'intégrer l'**identité décentralisée (DID)** pour améliorer l'authentification des utilisateurs.

### 16. Comment contribuer à la plateforme Werenode ?
Werenode est un écosystème ouvert, et les contributions de la communauté sont les bienvenues ! Vous pouvez consulter notre documentation pour développeurs sur le **portail Werenode** et contribuer en proposant des fonctionnalités, en signalant des problèmes ou même en développant de nouvelles intégrations.

---

Si votre question ne figure pas ici, n'hésitez pas à contacter notre équipe support ou à consulter la documentation détaillée sur le portail Werenode.
