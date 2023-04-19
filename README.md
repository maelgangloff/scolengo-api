# scolengo-api

[![view on npm](http://img.shields.io/npm/v/scolengo-api.svg?style=flat-square)](https://www.npmjs.org/package/scolengo-api)
![GitHub CI](https://github.com/maelgangloff/scolengo-api/actions/workflows/CI.yml/badge.svg)
[![Discord](https://img.shields.io/discord/1095829734211977276?label=Discord&style=flat-square)](https://discord.gg/9u69mxsFT6)
[![npm](https://img.shields.io/npm/dm/scolengo-api?style=flat-square)](https://npm-stat.com/charts.html?package=scolengo-api)

Support non officiel de l'API Skolengo. Il s'agit de l'API utilisée par la nouvelle application mobile éponyme. Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.  
Pour utiliser cette librairie, il est nécessaire de s'authentifier auprès des serveurs de Skolengo. Pour obtenir des jetons de connexion, vous pouvez utiliser [scolengo-token](https://github.com/maelgangloff/scolengo-token).  

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**  

## Remarques importantes:
- Il est clairement mentionné que cette librairie est n'est pas officielle.
- Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
- Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
- Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API des serveurs de Skolengo.
- Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
- Tout utilisateur de cette librairie a *a priori* lu l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
- Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
- Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.  

## Liste des ENT utilisant Skolengo :
| Nom usuel de l'ENT           | Code ENT | URL OpenID Connect Discovery                               |
|------------------------------|----------|------------------------------------------------------------|
| Mon Bureau Numérique         | gdest    | https://sso.monbureaunumerique.fr/oidc/.well-known         |
| Mon ENT Occitanie            | entmip   | https://sso.mon-ent-occitanie.fr/oidc/.well-known          |
| Arsène 76                    | cg76     | https://sso.arsene76.fr/oidc/.well-known                   |
| ENT27                        | cg27     | https://sso.ent27.fr/oidc/.well-known                      |
| ENT Creuse                   | cg23     | https://sso.entcreuse.fr/oidc/.well-known                  |
| ENT Auvergne-Rhône-Alpes     | rra      | https://sso.ent.auvergnerhonealpes.fr/oidc/.well-known     |
| Agora 06                     | cg06     | https://sso.agora06.fr/oidc/.well-known                    |
| CyberCollèges 42             | cg42     | https://sso.cybercolleges42.fr/oidc/.well-known            |
| eCollège 31 Haute-Garonne    | cg31     | https://sso.ecollege.haute-garonne.fr/oidc/.well-known     |
| Mon collège en Val d'Oise    | cg95     | https://sso.moncollege.valdoise.fr/oidc/.well-known        |
| Webcollège Seine-Saint-Denis | cg93     | https://sso.webcollege.seinesaintdenis.fr/oidc/.well-known |
| Eclat-BFC                    | bfc      | https://sso.eclat-bfc.fr/oidc/.well-known                  |
| @ucollège84                  | cg84     | https://sso.aucollege84.vaucluse.fr/oidc/.well-known       |
| ENT Val de Marne             | cg94     | https://sso.entvaldemarne.skolengo.com/oidc/.well-known    |
| Skolengo-Écoles primaires    | metab1d  | https://sso.skolengo.com/oidc/.well-known                  |
| Skolengo-Collèges et Lycées  | mpdl     | https://sso.pdl.kosmoseducation.com/oidc/.well-known       |
| AEFE                         | metab    | https://sso1.skolengo.com/oidc/.well-known                 |
| AEFE Amérique - Pacifique    | metabam  | https://sso2.skolengo.com/oidc/.well-known                 |
| Schulportal Ostbelgien       | cgb      | https://sso.schulen.be/oidc/.well-known                    |

<a name="Skolengo"></a>

## Skolengo
**Kind**: global class  

* [Skolengo](#Skolengo)
    * [new Skolengo(oidClient, school, tokenSet)](#new_Skolengo_new)
    * _instance_
        * [.getUserInfo(userId)](#Skolengo+getUserInfo)
        * [.getEvaluationSettings(studentId)](#Skolengo+getEvaluationSettings)
        * [.getEvaluation(studentId, periodId)](#Skolengo+getEvaluation)
        * [.getEvaluationDetail(studentId, markId)](#Skolengo+getEvaluationDetail)
        * [.getPeriodicReportsFiles(studentId)](#Skolengo+getPeriodicReportsFiles)
        * [.downloadPeriodicReportsFiles(url)](#Skolengo+downloadPeriodicReportsFiles)
        * [.getHomeworkAssignments(studentId, startDate, endDate)](#Skolengo+getHomeworkAssignments)
        * [.getHomeworkAssignment(studentId, homeworkId)](#Skolengo+getHomeworkAssignment)
        * [.patchHomeworkAssignment(studentId, homeworkId, attributes)](#Skolengo+patchHomeworkAssignment)
        * [.getAgenda(studentId, startDate, endDate)](#Skolengo+getAgenda)
        * [.getLesson(studentId, lessonId)](#Skolengo+getLesson)
        * [.getSchoolInfos()](#Skolengo+getSchoolInfos)
        * [.getSchoolInfo(schoolInfoId)](#Skolengo+getSchoolInfo)
        * [.getUsersMailSettings(userId)](#Skolengo+getUsersMailSettings)
        * [.getCommunicationsFolder(folderId, limit, offset)](#Skolengo+getCommunicationsFolder)
        * [.getCommunicationParticipations(communicationId)](#Skolengo+getCommunicationParticipations)
        * [.patchCommunicationFolders(communicationId, folders, userId)](#Skolengo+patchCommunicationFolders)
        * [.postCommunication(attributes)](#Skolengo+postCommunication)
        * [.getAbsenceFiles(studentId)](#Skolengo+getAbsenceFiles)
        * [.getAbsenceReasons()](#Skolengo+getAbsenceReasons)
    * _static_
        * [.revokeToken(oidClient, token)](#Skolengo.revokeToken)
        * [.getAppCurrentConfig()](#Skolengo.getAppCurrentConfig)
        * [.searchSchool(text, limit, offset)](#Skolengo.searchSchool)
        * [.searchSchoolGPS(lat, lon, limit, offset)](#Skolengo.searchSchoolGPS)
        * [.getOIDClient(school)](#Skolengo.getOIDClient)
        * [.fromConfigObject(config)](#Skolengo.fromConfigObject)

<a name="new_Skolengo_new"></a>

### new Skolengo(oidClient, school, tokenSet)
Il est possible de s'authentifier en possédant au prélable des jetons OAuth 2.0


| Param | Type | Description |
| --- | --- | --- |
| oidClient | <code>Client</code> | Un client OpenID Connect |
| school | <code>School</code> | Etablissement |
| tokenSet | <code>TokenSet</code> | Jetons d'authentification OpenID Connect |

**Example**  
```js
const {Skolengo, TokenSet} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
  if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
  const school = schools.data[0]
  const oidClient = await Skolengo.getOIDClient(school)

  // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.

  const tokenSet = new TokenSet({
    access_token: 'ACCESS_TOKEN',
    id_token: 'ID_TOKEN',
    refresh_token: 'REFRESH_TOKEN',
    token_type: 'bearer',
    expires_at: 1681486899,
    scope: 'openid'
  })

  const user = new Skolengo(oidClient, school, tokenSet)
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
})

```
<a name="Skolengo+getUserInfo"></a>

### skolengo.getUserInfo(userId)
Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant de l'utilisateur |

<a name="Skolengo+getEvaluationSettings"></a>

### skolengo.getEvaluationSettings(studentId)
Statut des services d'évaluation (identifiant des périodes, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |

<a name="Skolengo+getEvaluation"></a>

### skolengo.getEvaluation(studentId, periodId)
Récupérer les notes d'un étudiant sur une période

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| periodId | <code>string</code> | Identifiant de la période de notation |

<a name="Skolengo+getEvaluationDetail"></a>

### skolengo.getEvaluationDetail(studentId, markId)
Récupérer le détail d'une note d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| markId | <code>string</code> | Identifiant de la note |

<a name="Skolengo+getPeriodicReportsFiles"></a>

### skolengo.getPeriodicReportsFiles(studentId)
Récupérer la liste des bilans périodiques disponibles pour un étudiant.
Pour chaque bulletin, une adresse est disponible pour le téléchargement.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const bulletins = await getPeriodicReportsFiles('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx');
  console.log(bulletins)
})
```
<a name="Skolengo+downloadPeriodicReportsFiles"></a>

### skolengo.downloadPeriodicReportsFiles(url)
Télécharger le bilan périodique PDF (bulletin).


🚨 ATTENTION: Dans cette requête, votre jeton est envoyé à l'URL donnée en paramètre. Assurez-vous que l'URL provient de votre établissement.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | L'URL du document |

**Example**  
```js
const {createWriteStream} = require('node:fs')
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const student = 'ESKO-P-b2c86113-1062-427e-bc7f-0618cbd5d5ec'
  const bulletins = await user.getPeriodicReportsFiles(student)
  for(const bulletin of bulletins.data) {
    console.log(bulletin.attributes.name)
    (await user.downloadPeriodicReportsFiles(bulletin.attributes.url)).pipe(createWriteStream(bulletin.attributes.name));
  }
})
```
<a name="Skolengo+getHomeworkAssignments"></a>

### skolengo.getHomeworkAssignments(studentId, startDate, endDate)
Récupérer les devoirs d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| startDate | <code>string</code> | Date de début - Format : YYYY-MM-DD |
| endDate | <code>string</code> | Date de fin - Format : YYYY-MM-DD |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const startDate = new Date().toISOString().split("T")[0] // Aujourd'hui
  const endDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0] // Aujourd'hui + 15 jours
  const homework = await user.getHomeworkAssignments(user.tokenSet.claims().sub, startDate, endDate)

  console.log("Voici les exercices à faire pour les 2 prochaines semaines :", homework)
})
```
<a name="Skolengo+getHomeworkAssignment"></a>

### skolengo.getHomeworkAssignment(studentId, homeworkId)
Récupérer les données d'un devoir

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| homeworkId | <code>string</code> | Identifiant du devoir |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

const user = await Skolengo.fromConfigObject(config)

user.getHomeworkAssignment(user.tokenSet.claims().sub, "123456").then(e => {
    console.log(`Pour le ${new Date(e.data.attributes.dueDateTime).toLocaleString()} :`)
    console.log(`> ${e.data.attributes.title} (${e.included?.find(e => e.type === "subject")?.attributes.label})`)
    console.log(e.data.attributes.html)
})

```
<a name="Skolengo+patchHomeworkAssignment"></a>

### skolengo.patchHomeworkAssignment(studentId, homeworkId, attributes)
Modifier le statut d'un travail à faire

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| homeworkId | <code>string</code> | Identifiant d'un devoir à modifier |
| attributes | <code>Partial.&lt;HomeworkAttributes&gt;</code> | Devoir modifié |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

const user = await Skolengo.fromConfigObject(config)
user.patchHomeworkAssignment('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', '123456', { done: true }).then(hmw => {
  console.log(`Le travail "${hmw.data.attributes.title}" a été marqué ${hmw.data.attributes.done ? 'fait' : 'à faire'}.`)
})
```
<a name="Skolengo+getAgenda"></a>

### skolengo.getAgenda(studentId, startDate, endDate)
Récupérer l'agenda d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| startDate | <code>string</code> | Date de début - Format : YYYY-MM-DD |
| endDate | <code>string</code> | Date de fin - Format : YYYY-MM-DD |

<a name="Skolengo+getLesson"></a>

### skolengo.getLesson(studentId, lessonId)
Récupérer les données d'un cours/leçon

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| lessonId | <code>string</code> | Identifiant d'un cours/leçon |

<a name="Skolengo+getSchoolInfos"></a>

### skolengo.getSchoolInfos()
Récupérer toutes les actualités de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  
<a name="Skolengo+getSchoolInfo"></a>

### skolengo.getSchoolInfo(schoolInfoId)
Récupérer une actualité de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| schoolInfoId | <code>string</code> | Identifiant d'une actualité |

<a name="Skolengo+getUsersMailSettings"></a>

### skolengo.getUsersMailSettings(userId)
Récupérer les informations du service de communication (identifiants des dossiers, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant d'un utilisateur |

<a name="Skolengo+getCommunicationsFolder"></a>

### skolengo.getCommunicationsFolder(folderId, limit, offset)
Récupérer les communication d'un dossier

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folderId | <code>string</code> |  | Identifiant d'un dossier |
| limit | <code>number</code> \| <code>undefined</code> | <code>10</code> | Limite |
| offset | <code>number</code> \| <code>undefined</code> | <code>0</code> | Offset |

<a name="Skolengo+getCommunicationParticipations"></a>

### skolengo.getCommunicationParticipations(communicationId)
Récupérer les participations d'un fil de discussion (communication)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| communicationId | <code>string</code> | Identifiant d'une communication |

<a name="Skolengo+patchCommunicationFolders"></a>

### skolengo.patchCommunicationFolders(communicationId, folders, userId)
Déplacer une communication dans un dossier

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| communicationId | <code>string</code> | Identifiant d'une communication |
| folders |  | Liste contenant l'identifiant du dossier |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant de l'utilisateur |

<a name="Skolengo+postCommunication"></a>

### skolengo.postCommunication(attributes)
Envoyer un message dans un nouveau fil de discussion

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>NewCommunication</code> | Les attributs de la nouvelle communication |

<a name="Skolengo+getAbsenceFiles"></a>

### skolengo.getAbsenceFiles(studentId)
Récupérer les absences et retards d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |

<a name="Skolengo+getAbsenceReasons"></a>

### skolengo.getAbsenceReasons()
Récupérer la liste des motifs d'absence de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  
**Example**  
```js
const {Skolengo} = require('scolengo-api')

const user = await Skolengo.fromConfigObject(config)
user.getAbsenceReasons().then(response => {
  console.log(`Liste des motifs: ${response.data.map(r => r.attributes.longLabel).join(';')}`)
})
```
<a name="Skolengo.revokeToken"></a>

### Skolengo.revokeToken(oidClient, token)
Révoquer un jeton

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| oidClient | <code>Client</code> | Un client OpenID Connect |
| token | <code>string</code> | Un jeton |

<a name="Skolengo.getAppCurrentConfig"></a>

### Skolengo.getAppCurrentConfig()
Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.getAppCurrentConfig().then(config => {
  console.log(`Dernière version déployée: ${config.data.attributes.latestDeployedSkoAppVersion}`)
  console.log(`Dernière version supportée: ${config.data.attributes.latestSupportedSkoAppVersion}`)
})
```
<a name="Skolengo.searchSchool"></a>

### Skolengo.searchSchool(text, limit, offset)
Rechercher un établissement scolaire

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | Le nom partiel de l'établissement |
| limit | <code>number</code> | <code>10</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
  console.log(schools)
})
```
<a name="Skolengo.searchSchoolGPS"></a>

### Skolengo.searchSchoolGPS(lat, lon, limit, offset)
Rechercher un établissement scolaire à partir de coordonnées GPS

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| lat | <code>number</code> |  | Latitude |
| lon | <code>number</code> |  | Longitude |
| limit | <code>number</code> | <code>10</code> | Limite |
| offset | <code>number</code> | <code>10</code> | Offset |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool(48.0, 7.0).then(schools => {
  console.log(schools)
})
```
<a name="Skolengo.getOIDClient"></a>

### Skolengo.getOIDClient(school)
Créer un client OpenID Connect permettant l'obtention des jetons (refresh token et access token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| school | <code>School</code> | L'établissement scolaire |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
  if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
  const school = schools.data[0]
  const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
  console.log(oidClient.authorizationUrl())
  // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanismes OAuth 2.0 et OID Connect)
})
```
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
  if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
  const school = schools.data[0]
  const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')

  const params = oidClient.callbackParams('skoapp-prod://sign-in-callback?code=OC-9999-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-X')
  const tokenSet = await oidClient.callback('skoapp-prod://sign-in-callback', params)
  // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.

  const user = new Skolengo(oidClient, school, tokenSet)
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
})
```
<a name="Skolengo.fromConfigObject"></a>

### Skolengo.fromConfigObject(config)
Créer un client Skolengo à partir d'un objet contenant les informations d'authentification.
Cet objet de configuration peut être généré à partir de l'utilitaire [scolengo-token](https://github.com/maelgangloff/scolengo-token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>AuthConfig</code> | Informations d'authentification |

**Example**  
```js
const {Skolengo} = require('scolengo-api')
const config = require('./config.json')
const user = await Skolengo.fromConfigObject(config)
```
```js
const {Skolengo} = require('scolengo-api')

// 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
const config = {
  "tokenSet": {
    "access_token": "<access_token_here>",
    "id_token": "<id_token_here>",
    "refresh_token": "RT-<refresh_token_here>",
    "token_type": "bearer",
    "expires_at": 1234567890,
    "scope": "openid"
  },
  "school": {
    "id": "SKO-E-<school_id>",
    "type": "school",
    "attributes": {
      "name": "<school_name>",
      "addressLine1": "<school_address>",
      "addressLine2": null,
      "addressLine3": null,
      "zipCode": "<school_zip_code>",
      "city": "<school_city>",
      "country": "France",
      "homePageUrl": "<cas_login_url>",
      "emsCode": "<school_ems_code>",
      "emsOIDCWellKnownUrl": "<school_ems_oidc_well_known_url>"
    }
  }
}
Skolengo.fromConfigObject(config).then(async user => {
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
})
```
