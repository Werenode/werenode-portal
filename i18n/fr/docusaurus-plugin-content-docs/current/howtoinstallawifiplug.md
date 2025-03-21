---
sidebar_position: 3
sidebar_label: "Comment partager votre prise de charge"
---

# Installation et partage d'une prise connectée

Bienvenue dans ce guide sur l'installation d'une **prise ou interrupteur connecté Shelly** et son partage sur la plateforme Werenode. Ce manuel utilisateur vous aidera à configurer votre prise ou interrupteur, à le connecter à l'écosystème Werenode et à le partager avec d'autres utilisateurs de véhicules électriques (VE) pour la recharge.

## Introduction

Les **prises et interrupteurs Shelly** sont des dispositifs IoT qui peuvent être intégrés à la plateforme Werenode pour gérer la recharge des véhicules électriques. En partageant votre prise ou interrupteur via Werenode, vous permettez à d'autres utilisateurs de VE d'accéder, de gérer et de payer la recharge en utilisant la technologie blockchain.

## Prérequis

Avant de commencer, assurez-vous de disposer de :

1. **Prise ou interrupteur Shelly** : Assurez-vous de posséder une prise ou un interrupteur intelligent Shelly que vous souhaitez installer.
2. **Connexion internet** : Une connexion Wi-Fi stable pour connecter le dispositif Shelly à Internet.
3. **Compte Werenode** : Un compte Werenode actif pour enregistrer et partager la prise ou l'interrupteur.
4. **Smartphone** : Un smartphone pour utiliser l'**application Shelly** et l'**application mobile Werenode**.

## Étape 1 : Installer la Prise ou l'Interrupteur Shelly

### 1.1 Installation physique

1. **Installer une Prise Appropriée** : Installez la prise intelligente Shelly avec une ligne directe et séparée vers votre tableau de distribution électrique.
2. **Connecter Votre Chargeur** : Branchez votre chargeur de VE à la prise Shelly pour contrôler l'alimentation de votre véhicule électrique.
3. **Allumer** : Assurez-vous que la prise Shelly est sous tension ; un indicateur LED devrait s'allumer.

### 1.2 Configuration via l'application Shelly

1. **Télécharger l'application Shelly** : Obtenez l'**application Shelly** depuis le Google Play Store ou l'Apple App Store.
2. **Créer un compte** : Si vous n'avez pas encore de compte Shelly, créez-en un en suivant les instructions de l'application.
3. **Ajouter un nouvel appareil** :
   - Ouvrez l'application Shelly et appuyez sur le bouton **Ajouter un Appareil**.
   - Suivez les instructions à l'écran pour connecter la prise Shelly à votre réseau Wi-Fi.
4. **Tester la connexion** : Après la configuration, vous devriez pouvoir contrôler la prise en utilisant l'application Shelly.

## Étape 2 : Intégrer la prise Shelly avec Werenode

### 2.1 Activer le protocole MQTT pour la communication

Werenode utilise le **protocole MQTT** pour gérer les dispositifs IoT connectés comme les prises Shelly.

1. **Accéder aux Paramètres de l'Appareil** :
   - Ouvrez l'application Shelly et sélectionnez votre prise Shelly.
   - Allez dans **Paramètres** et trouvez la section **Internet & Sécurité**.
2. **Activer MQTT** :
   - Activez **MQTT** et entrez l'**URL du broker MQTT** fournie par la plateforme Werenode.
   - Entrez le **nom d'utilisateur** et le **mot de passe** pour l'authentification, tels que fournis dans votre tableau de bord Werenode.

### 2.2 Enregistrer la prise sur Werenode (actuellement en version bêta, contactez-nous directement)

1. **Se connecter à Werenode** : Ouvrez l'**application mobile Werenode** et connectez-vous à votre compte.
2. **Naviguer vers Mes Appareils** :
   - Allez dans le **Tableau de Bord** et cliquez sur **Mes Appareils**.
   - Cliquez sur **Enregistrer un appareil**.
3. **Entrer les informations sur l'appareil** :
   - **Nom de l'appareil** : Donnez un nom unique à votre prise Shelly (par exemple, "Chargeur VE Maison").
   - **Type d'appareil** : Sélectionnez **Prise/Interrupteur Shelly** parmi les options.
   - **Localisation** : Entrez l'emplacement de votre appareil, soit par adresse, soit par coordonnées GPS.
   - **Disponibilité** : Spécifiez quand l'appareil est disponible pour une utilisation publique, comme **24/7** ou à des heures spécifiques de la journée.
4. **Confirmation des paramètres MQTT** :
   - Confirmez les paramètres MQTT en entrant les **identifiants MQTT** utilisés dans l'application Shelly.

### 2.3 Tester l'intégration

1. **Tester le contrôle via l'application Werenode** :
   - Après l'enregistrement, vérifiez si vous pouvez voir l'appareil dans votre liste **Mes Appareils**.
   - Appuyez sur l'appareil et cliquez sur **Allumer/Éteindre** pour vérifier qu'il répond correctement.

## Étape 3 : Partager la prise avec d'autres utilisateurs de VE

### 3.1 Définir les préférences de partage

1. **Aller aux Options de Partage** :
   - Dans l'application Werenode, naviguez vers **Mes Appareils** et sélectionnez votre prise Shelly.
   - Cliquez sur **Options de Partage**.
2. **Définir le Niveau d'Accès** :
   - Choisissez si la prise est **Publique** (accessible à tous les utilisateurs de Werenode) ou **Privée** (partagée uniquement avec des utilisateurs sélectionnés).
   - Si **Privée**, ajoutez les adresses e-mail des utilisateurs avec qui vous souhaitez la partager.
3. **Définir la Tarification** :
   - Fixez un prix par **kWh** ou par **session** de recharge. Vous pouvez également choisir une **option gratuite** si vous souhaitez partager sans paiement.

### 3.2 Rendre la prise disponible sur le réseau Werenode

1. **Publier Votre Prise** :
   - Cliquez sur **Publier** pour rendre votre prise visible aux autres utilisateurs de VE sur la carte Werenode.
2. **Vérifier la Disponibilité** :
   - Ouvrez la carte sur l'application Werenode et vérifiez que votre prise Shelly est répertoriée au bon endroit.

## Étape 4 : Surveiller et gérer votre prise

### 4.1 Surveillance en temps réel

- **Consommation d'Énergie** : Visualisez la consommation totale d'énergie via votre prise.
- **Données de Session** : Consultez des informations détaillées sur les sessions de recharge, y compris les détails des utilisateurs, la durée et les revenus.

### 4.2 Modifier les informations de la prise

Si vous souhaitez modifier des détails tels que la disponibilité ou la tarification :

1. **Accédez à Mes Appareils** depuis l'application Werenode.
2. Sélectionnez votre prise Shelly, puis cliquez sur **Modifier** pour ajuster les informations nécessaires.

### 4.3 Désactivation

Si vous devez temporairement rendre votre prise indisponible :

- Rendez-vous dans les **Paramètres de l'appareil** et basculez la **Disponibilité** sur **Inactive**.

## Dépannage

### La prise ne répond pas

- **Vérifiez la connexion Wi-Fi** : Assurez-vous que la prise Shelly est correctement connectée à un réseau Wi-Fi stable.
- **Paramètres MQTT** : Vérifiez que l'URL du broker MQTT ainsi que le nom d'utilisateur et le mot de passe saisis dans l'application Shelly sont corrects.

### La prise n'apparaît pas sur la carte Werenode

- **Enregistrement en attente** : Vérifiez que votre prise a été approuvée par l'équipe Werenode.
- **Paramètres de disponibilité** : Assurez-vous que votre prise est configurée comme **Publique** et disponible pendant les plages horaires choisies.

## Support

Pour toute assistance complémentaire concernant votre prise Shelly ou son intégration à Werenode, contactez le support technique de Werenode à l'adresse [support@werenode.com](mailto:support@werenode.com), ou utilisez la section **Aide** de l'application mobile.

---

En suivant ce guide, vous pourrez facilement installer une prise ou un interrupteur connecté Shelly, l'intégrer à la plateforme Werenode et la partager avec d'autres utilisateurs de véhicules électriques. Vous participez ainsi à la création d'un réseau communautaire et décentralisé, facilitant l'accès à la recharge des véhicules électriques pour tous !
 
