---
sidebar_position: 4
---

# Enregistrer ma borne - Manuel utilisateur

Bienvenue sur la page **Enregistrer ma borne** (Register My EVSE) ! Ce guide vous accompagne pas à pas pour enregistrer votre équipement de recharge pour véhicules électriques (EVSE) auprès de Werenode. Une fois enregistrée, votre borne peut être mise à disposition, en usage public ou privé, sur le réseau de recharge Werenode.

## Introduction

La page **Enregistrer ma borne** permet aux propriétaires de bornes d'ajouter rapidement et simplement leurs équipements à la plateforme Werenode. Une fois enregistrée, votre borne est visible dans notre application mobile et sur notre portail web : les conducteurs peuvent la trouver, l'utiliser et payer leurs recharges grâce à des transactions sur la blockchain.

## Prérequis

Avant de commencer, assurez-vous de disposer de :

1. **Un compte Werenode** : un compte Werenode actif est nécessaire pour enregistrer votre borne.
2. **Les informations de votre borne**, notamment :
   - **Emplacement (adresse ou coordonnées GPS)**
   - **Type de borne** : recharge rapide ou lente
   - **Type de connecteur** : Type 1, Type 2, CHAdeMO, CCS, etc.
   - **Compatibilité OCPP** : vérifiez que votre borne prend en charge le protocole OCPP (Open Charge Point Protocol).
3. **Un accès à Internet** : une connexion stable pour finaliser l'enregistrement.

## Comment enregistrer votre borne

Suivez ces étapes pour enregistrer votre borne sur la plateforme Werenode :

### Étape 1 : connectez-vous

1. Rendez-vous sur le portail web Werenode et cliquez sur le bouton **Login**, en haut à droite.
2. Saisissez vos identifiants (e-mail et mot de passe) puis cliquez sur **Sign In**.
3. Si vous n'avez pas encore de compte, cliquez sur **Sign Up** pour en créer un.

### Étape 2 : ouvrez la page « Register My EVSE »

1. Une fois connecté, allez dans le **tableau de bord** (Dashboard).
2. Dans le menu du tableau de bord, sélectionnez **Register My EVSE**. Le formulaire d'enregistrement s'ouvre.

### Étape 3 : saisissez les informations de la borne

Plusieurs informations sur votre borne vous sont demandées :

- **Nom de la borne** : donnez un nom unique à votre borne (par exemple « Borne rapide centre-ville »).
- **Emplacement** :
  - **Adresse** : saisissez l'adresse de la borne.
  - **Coordonnées GPS** : vous pouvez aussi saisir la latitude et la longitude pour plus de précision.
- **Type de connecteur** : choisissez le ou les types de connecteurs disponibles (par exemple Type 1, Type 2, CHAdeMO, CCS).
- **Vitesse de recharge** : indiquez s'il s'agit d'une borne de **recharge lente** ou **rapide**.
- **Disponibilité** : précisez les horaires d'ouverture (par exemple 24 h/24 et 7 j/7, ou des horaires précis).
- **Tarifs** : indiquez le prix de la recharge (par exemple au kWh ou par session). Vous pouvez fixer un prix forfaitaire ou un tarif selon l'énergie consommée.
- **Mode d'authentification** :
  - **Paiement par blockchain** : à sélectionner si les paiements se font en jetons sur la blockchain.
  - **RFID** : si votre borne utilise un badge RFID, renseignez-le ici.

### Étape 4 : configuration OCPP

Si votre borne est **compatible OCPP**, quelques réglages supplémentaires sont nécessaires :

- **Version OCPP** : sélectionnez la version prise en charge par votre borne (par exemple OCPP 1.6, OCPP 2.0).
- **URL du système central** : saisissez l'URL du système central qui gérera la communication avec la borne.

### Étape 5 : ajoutez des options

Vous pouvez aussi ajouter des informations facultatives :

- **Photos** : ajoutez des photos de votre borne pour aider les conducteurs à la trouver facilement.
- **Restrictions d'accès** : indiquez si la borne est **publique** ou **privée**. Si elle est privée, précisez qui peut y accéder.
- **Coordonnées** : indiquez un moyen de vous contacter en cas de problème.

### Étape 6 : confirmez l'enregistrement

Une fois tous les champs obligatoires remplis :

1. **Relisez les informations** : vérifiez que tout est exact.
2. **Cliquez sur « Register »** : appuyez sur le bouton **Register** en bas de la page.

### Étape 7 : vérification

Après avoir cliqué sur Register :

1. L'équipe Werenode examine votre demande.
2. Vous recevez un e-mail confirmant l'ajout de votre borne au réseau, généralement sous 24 à 48 heures.

### Étape 8 : gérez votre borne

Une fois votre borne enregistrée, vous pouvez la gérer depuis le **tableau de bord** :

- **Modifier les informations** : pour changer une information, allez dans la section **My EVSE** et cliquez sur le bouton **Edit** à côté de votre borne.
- **Consulter les statistiques** : suivez les sessions de recharge, l'énergie consommée et les revenus générés.
- **Désactiver la borne** : retirez temporairement votre borne du réseau si besoin.

## Conseils pour bien enregistrer votre borne

- **Indiquez un emplacement exact** : une adresse ou des coordonnées GPS correctes sont essentielles pour que les utilisateurs trouvent votre borne.
- **Ajoutez des photos de qualité** : elles aident les conducteurs à reconnaître rapidement votre borne et ses abords.
- **Vérifiez la compatibilité OCPP** : les réglages OCPP doivent correspondre aux capacités de votre borne pour que la communication fonctionne.
- **Format de l'identifiant** : il comporte au maximum 6 caractères Base58. Un caractère Base58 est l'un des suivants :
  
```
1 2 3 4 5 6 7 8 9
A B C D E F G H   J K L M N   P Q R S T U V W X Y Z
a b c d e f g h i j k   m n o p q r s t u v w x y z
```
- **Nombre de bornes** : chaque borne reçoit les mêmes réglages (sauf l'identifiant). Les réglages propres à une borne peuvent être modifiés à l'étape « Edit Settings ».
Si plusieurs bornes sont déclarées, l'identifiant de chacune est l'identifiant saisi suivi d'un espace et de son numéro (entre 1 et le nombre de bornes). Par exemple, si l'identifiant est WNEX et que vous déclarez 3 bornes, leurs identifiants sont :
* WNEX 1
* WNEX 2
* WNEX 3

## Résolution des problèmes

### Je n'arrive pas à enregistrer ma borne

- **Vérifiez votre connexion Internet** : assurez-vous qu'elle est stable.
- **Informations incomplètes** : vérifiez que tous les champs obligatoires sont remplis.
- **Problèmes OCPP** : vérifiez votre configuration OCPP. Contactez le fabricant de votre borne si vous avez besoin de plus d'informations.

### Ma borne n'apparaît pas sur la carte

- **Enregistrement en attente** : votre demande est peut-être encore en cours d'examen. Vérifiez si vous avez reçu l'e-mail de confirmation.
- **Réglages de disponibilité** : vérifiez que votre borne est bien ouverte au public.

## Support

Si vous avez besoin d'aide, contactez notre équipe support via la section **Help** du portail web ou écrivez-nous à [support@werenode.com](mailto:support@werenode.com).

---

Merci d'ajouter votre borne au réseau Werenode ! Ensemble, nous construisons une infrastructure de recharge décentralisée et efficace.
