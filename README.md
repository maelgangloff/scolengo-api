# scolengo-api

[![view on npm](http://img.shields.io/npm/v/scolengo-api.svg?style=flat-square)](https://www.npmjs.org/package/scolengo-api)
![GitHub CI](https://github.com/maelgangloff/scolengo-api/actions/workflows/CI.yml/badge.svg)
[![Discord](https://img.shields.io/discord/1095829734211977276?label=Discord&style=flat-square)](https://discord.gg/9u69mxsFT6)
[![npm](https://img.shields.io/npm/dm/scolengo-api?style=flat-square)](https://npm-stat.com/charts.html?package=scolengo-api)

<p align="center">
  <img src="https://github.com/The-Rabbit-Team/.github/blob/master/banners/scolengo-api.png?raw=true" />
</p>

Support non officiel de l'API Skolengo. Il s'agit de l'API utilisée par la nouvelle application mobile éponyme. Ce module permet de récupérer les données de l'ENT de manière automatique. De plus, certaines fonctions implémentées permettent de prétraiter les données (conversion de l'emploi du temps au format iCalendar par exemple).

Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.

> [!TIP]
> Pour utiliser cette librairie, il est nécessaire de s'authentifier auprès des serveurs de Skolengo. Pour obtenir des jetons de connexion, vous pouvez utiliser [scolengo-token](https://github.com/maelgangloff/scolengo-token).

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**

## Disclaimer
> [!WARNING]
> - Il est clairement mentionné que cette librairie n'est pas officiellement éditée par la société éditrice du logiciel *Skolengo*.
> - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
> - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application et imposé par le serveur API.
> - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API des serveurs de Skolengo.
> - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
> - Tout utilisateur de cette librairie a *a priori* lu et approuvé l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
> - Tout utilisateur de cette librairie a *a priori* lu et compris l'entièreté du code de ce projet avant toute utilisation.
> - L'auteur de ce projet n'agit pas en tant qu'intermédiaire de traitement des données au sens du RGPD. Les utilisateurs sont responsables de leur propre conformité au RGPD lors de l'utilisation de cette librairie. Ils doivent s'assurer que leur utilisation de cette librairie est conforme aux exigences du RGPD et de toute autre législation applicable en matière de protection des données.
> - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus responsables de tout dommage potentiel.

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
| ENT Val de Marne             | cg94     | https://sso.moncollege.valdemarne.fr/oidc/.well-known      |
| Skolengo-Écoles primaires    | metab1d  | https://sso.skolengo.com/oidc/.well-known                  |
| Skolengo-Collèges et Lycées  | mpdl     | https://sso.pdl.kosmoseducation.com/oidc/.well-known       |
| AEFE                         | metab    | https://sso1.skolengo.com/oidc/.well-known                 |
| AEFE Amérique - Pacifique    | metabam  | https://sso2.skolengo.com/oidc/.well-known                 |
| Schulportal Ostbelgien       | cgb      | https://sso.schulen.be/oidc/.well-known                    |

Un wiki est disponible, celui-ci rassemble davantage d'informations sur le fonctionnement de l'API. **[Ce wiki est disponible ici](https://github.com/maelgangloff/scolengo-api/wiki).**

<a name="Skolengo"></a>

## Skolengo
**Kind**: global class  

* [Skolengo](#Skolengo)
    * [new Skolengo(oidClient, school, tokenSet, config)](#new_Skolengo_new)
    * _instance_
        * [.getUserInfo(userId, params, includes)](#Skolengo+getUserInfo)
        * [.downloadAttachment(attachment)](#Skolengo+downloadAttachment)
        * [.getSchoolInfos(params, includes)](#Skolengo+getSchoolInfos)
        * [.getSchoolInfo(schoolInfoId, params, includes)](#Skolengo+getSchoolInfo)
        * [.getEvaluationSettings(studentId, limit, offset, params, includes)](#Skolengo+getEvaluationSettings)
        * [.getEvaluation(studentId, periodId, limit, offset, params, includes)](#Skolengo+getEvaluation)
        * [.getEvaluationDetail(studentId, evaluationId, params, includes)](#Skolengo+getEvaluationDetail)
        * [.getPeriodicReportsFiles(studentId, limit, offset, params, includes)](#Skolengo+getPeriodicReportsFiles)
        * [.getAgenda(studentId, startDate, endDate, limit, offset, params, includes)](#Skolengo+getAgenda)
        * [.getLesson(studentId, lessonId, params, includes)](#Skolengo+getLesson)
        * [.getHomeworkAssignments(studentId, startDate, endDate, limit, offset, params, includes)](#Skolengo+getHomeworkAssignments)
        * [.getHomeworkAssignment(studentId, homeworkId, params, includes)](#Skolengo+getHomeworkAssignment)
        * [.patchHomeworkAssignment(studentId, homeworkId, attributes, params, includes)](#Skolengo+patchHomeworkAssignment)
        * [.getUsersMailSettings(userId, params, includes)](#Skolengo+getUsersMailSettings)
        * [.getCommunicationsFolder(folderId, limit, offset, params, includes)](#Skolengo+getCommunicationsFolder)
        * [.getCommunication(communicationId, params)](#Skolengo+getCommunication)
        * [.getCommunicationParticipations(communicationId, params, includes)](#Skolengo+getCommunicationParticipations)
        * [.getCommunicationParticipants(communicationId, fromGroup, params, includes)](#Skolengo+getCommunicationParticipants)
        * [.patchCommunicationFolders(communicationId, folders, userId, params)](#Skolengo+patchCommunicationFolders)
        * [.postCommunication(newCommunication, params)](#Skolengo+postCommunication)
        * [.postParticipation(participation, params)](#Skolengo+postParticipation)
        * [.getAbsenceFiles(studentId, limit, offset, params, includes)](#Skolengo+getAbsenceFiles)
        * [.getAbsenceFile(folderId, params, includes)](#Skolengo+getAbsenceFile)
        * [.postAbsenceFileState(folderId, reasonId, comment, params)](#Skolengo+postAbsenceFileState)
        * [.getAbsenceReasons(limit, offset, params)](#Skolengo+getAbsenceReasons)
        * [.refreshToken(triggerListener)](#Skolengo+refreshToken)
        * [.getTokenClaims()](#Skolengo+getTokenClaims)
    * _static_
        * [.revokeToken(oidClient, token)](#Skolengo.revokeToken)
        * [.getAppCurrentConfig(httpConfig)](#Skolengo.getAppCurrentConfig)
        * [.searchSchool(filter, limit, offset, httpConfig)](#Skolengo.searchSchool)
        * [.getOIDClient(school, redirectUri)](#Skolengo.getOIDClient)
        * [.fromConfigObject(config, skolengoConfig)](#Skolengo.fromConfigObject)

<a name="new_Skolengo_new"></a>

### new Skolengo(oidClient, school, tokenSet, config)
Il est possible de s'authentifier en possédant au prélable des jetons OAuth 2.0


| Param | Type | Description |
| --- | --- | --- |
| oidClient | <code>Client</code> | Un client OpenID Connect |
| school | <code>School</code> | Etablissement |
| tokenSet | <code>TokenSetParameters</code> | Jetons d'authentification OpenID Connect |
| config | <code>SkolengoConfig</code> | Configuration optionnelle (stockage du jeton renouvellé, client HTTP personnalisé, gestion des erreurs Pronote, ...) |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

// 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
// L'objet de configuration ci-dessous peut être généré à partir de l'utilitaire scolengo-token (https://github.com/maelgangloff/scolengo-token)
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
Skolengo.fromConfigObject(config).then(async user => {
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
})
```
```js
const {Skolengo} = require('scolengo-api')
const {TokenSet} = require('openid-client')

Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
  if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
  const school = schools[0]
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
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
})
```
<a name="Skolengo+getUserInfo"></a>

### skolengo.getUserInfo(userId, params, includes)
Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant de l'utilisateur |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+downloadAttachment"></a>

### skolengo.downloadAttachment(attachment)
Télécharger une pièce jointe.

Une pièce jointe peut être un fichier inclu dans un courriel, une actualité de l'établissement ou un bulletin périodique.

> [!CAUTION]
> 🚨 ATTENTION: Dans cette requête, votre jeton est envoyé à l'URL du fichier. Assurez-vous que celle-ci provient bien de votre établissement.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| attachment | <code>Attachment</code> | La pièce jointe |

**Example**  
```js
const {createWriteStream} = require('node:fs')
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const student = 'ESKO-P-b2c86113-1062-427e-bc7f-0618cbd5d5ec'
  const bulletins = await user.getPeriodicReportsFiles(student)
  for(const bulletin of bulletins) {
    console.log(bulletin.name)
    (await user.downloadAttachment(bulletin)).pipe(createWriteStream(bulletin.name));
  }
})
```
<a name="Skolengo+getSchoolInfos"></a>

### skolengo.getSchoolInfos(params, includes)
Récupérer toutes les actualités de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getSchoolInfo"></a>

### skolengo.getSchoolInfo(schoolInfoId, params, includes)
Récupérer une actualité de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| schoolInfoId | <code>string</code> | Identifiant d'une actualité |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getEvaluationSettings"></a>

### skolengo.getEvaluationSettings(studentId, limit, offset, params, includes)
Statut des services d'évaluation (identifiant des périodes, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

<a name="Skolengo+getEvaluation"></a>

### skolengo.getEvaluation(studentId, periodId, limit, offset, params, includes)
Récupérer les notes d'un étudiant sur une période

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| periodId | <code>string</code> |  | Identifiant de la période de notation |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

<a name="Skolengo+getEvaluationDetail"></a>

### skolengo.getEvaluationDetail(studentId, evaluationId, params, includes)
Récupérer le détail d'une note d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| evaluationId | <code>string</code> | Identifiant de la note |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getPeriodicReportsFiles"></a>

### skolengo.getPeriodicReportsFiles(studentId, limit, offset, params, includes)
Récupérer la liste des bilans périodiques disponibles pour un étudiant.
Pour chaque bulletin, une adresse est disponible pour le téléchargement.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const bulletins = await getPeriodicReportsFiles('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx');
  console.log(bulletins)
})
```
<a name="Skolengo+getAgenda"></a>

### skolengo.getAgenda(studentId, startDate, endDate, limit, offset, params, includes)
Récupérer l'agenda d'un étudiant.
Il est possible de le convertir au format iCalendar.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| startDate | <code>string</code> |  | Date de début - Format : YYYY-MM-DD |
| endDate | <code>string</code> |  | Date de fin - Format : YYYY-MM-DD |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

**Example**  
```js
const { writeFileSync } = require('node:fs')
const { Skolengo } = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const studentId = 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  const agenda = await user.getAgenda(studentId, '2023-05-01', '2023-05-30')

  writeFileSync('export.ics', agenda.toICalendar())
})
```
<a name="Skolengo+getLesson"></a>

### skolengo.getLesson(studentId, lessonId, params, includes)
Récupérer les données d'un cours/leçon

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| lessonId | <code>string</code> | Identifiant d'un cours/leçon |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getHomeworkAssignments"></a>

### skolengo.getHomeworkAssignments(studentId, startDate, endDate, limit, offset, params, includes)
Récupérer les devoirs d'un étudiant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| startDate | <code>string</code> |  | Date de début - Format : YYYY-MM-DD |
| endDate | <code>string</code> |  | Date de fin - Format : YYYY-MM-DD |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const startDate = new Date().toISOString().split('T')[0] // Aujourd'hui
  const endDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3).toISOString().split('T')[0] // Aujourd'hui + 15 jours
  const homework = await user.getHomeworkAssignments(user.getTokenClaims().sub, startDate, endDate)

  console.log("Voici les exercices à faire pour les 2 prochaines semaines :", homework)
})
```
<a name="Skolengo+getHomeworkAssignment"></a>

### skolengo.getHomeworkAssignment(studentId, homeworkId, params, includes)
Récupérer les données d'un devoir

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| homeworkId | <code>string</code> | Identifiant du devoir |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

const user = await Skolengo.fromConfigObject(config)

user.getHomeworkAssignment(user.getTokenClaims().sub, "123456").then(e => {
    console.log(`Pour le ${new Date(e.dueDateTime).toLocaleString()} :`)
    console.log(`> ${e.title} (${e.subject.label})`)
    console.log(e.html)
})

```
<a name="Skolengo+patchHomeworkAssignment"></a>

### skolengo.patchHomeworkAssignment(studentId, homeworkId, attributes, params, includes)
Modifier le statut d'un travail à faire

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |
| homeworkId | <code>string</code> | Identifiant d'un devoir à modifier |
| attributes | <code>Partial.&lt;HomeworkAssignment&gt;</code> | Devoir modifié |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

const user = await Skolengo.fromConfigObject(config)
user.patchHomeworkAssignment('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', '123456', { done: true }).then(hmw => {
  console.log(`Le travail "${hmw.title}" a été marqué ${hmw.done ? 'fait' : 'à faire'}.`)
})
```
<a name="Skolengo+getUsersMailSettings"></a>

### skolengo.getUsersMailSettings(userId, params, includes)
Récupérer les informations du service de communication (identifiants des dossiers, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant d'un utilisateur |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getCommunicationsFolder"></a>

### skolengo.getCommunicationsFolder(folderId, limit, offset, params, includes)
Récupérer les communication d'un dossier

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folderId | <code>string</code> |  | Identifiant d'un dossier |
| limit | <code>number</code> | <code>10</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

<a name="Skolengo+getCommunication"></a>

### skolengo.getCommunication(communicationId, params)
Récupérer une communication à partir de son identifiant.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| communicationId | <code>string</code> | Identifiant d'une communication |
| params | <code>object</code> | Modifier les paramètres de la requête |

<a name="Skolengo+getCommunicationParticipations"></a>

### skolengo.getCommunicationParticipations(communicationId, params, includes)
Récupérer les participations d'un fil de discussion (communication)
Marque la communication comme lue.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| communicationId | <code>string</code> | Identifiant d'une communication |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+getCommunicationParticipants"></a>

### skolengo.getCommunicationParticipants(communicationId, fromGroup, params, includes)
Récupérer tous les participants d'un fil de discussion (communication)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| communicationId | <code>string</code> |  | Identifiant d'une communication |
| fromGroup | <code>boolean</code> | <code>true</code> | Afficher le détail des groupes |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

<a name="Skolengo+patchCommunicationFolders"></a>

### skolengo.patchCommunicationFolders(communicationId, folders, userId, params)
Déplacer une communication dans un dossier

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| communicationId | <code>string</code> | Identifiant d'une communication |
| folders |  | Liste contenant l'identifiant du dossier |
| userId | <code>string</code> \| <code>undefined</code> | Identifiant de l'utilisateur |
| params | <code>object</code> | Modifier les paramètres de la requête |

<a name="Skolengo+postCommunication"></a>

### skolengo.postCommunication(newCommunication, params)
Envoyer un message dans un nouveau fil de discussion

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| newCommunication | <code>Partial.&lt;Communication&gt;</code> | La nouvelle communication |
| params | <code>object</code> | Modifier les paramètres de la requête |

<a name="Skolengo+postParticipation"></a>

### skolengo.postParticipation(participation, params)
Envoyer un message dans un fil de discussion existant

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| participation | <code>Partial.&lt;Participation&gt;</code> | La nouvelle participation |
| params | <code>object</code> | Modifier les paramètres de la requête |

<a name="Skolengo+getAbsenceFiles"></a>

### skolengo.getAbsenceFiles(studentId, limit, offset, params, includes)
Récupérer les absences et retards d'un étudiant.
Il est possible d'exporter les absences au format CSV.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| studentId | <code>string</code> |  | Identifiant d'un étudiant |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>offset</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> |  | Ressources JSON:API à inclure |

**Example**  
```js
const { writeFileSync } = require('node:fs')
const { Skolengo } = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  const studentId = 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  const absenceFiles = await user.getAbsenceFiles(studentId)

  writeFileSync('export.csv', agenda.toCSV())
})
```
<a name="Skolengo+getAbsenceFile"></a>

### skolengo.getAbsenceFile(folderId, params, includes)
Récupérer les détails d'une absence

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>string</code> | Identifiant d'un dossier |
| params | <code>object</code> | Modifier les paramètres de la requête |
| includes | <code>Array.&lt;string&gt;</code> | Ressources JSON:API à inclure |

<a name="Skolengo+postAbsenceFileState"></a>

### skolengo.postAbsenceFileState(folderId, reasonId, comment, params)
Justifier une absence avec motif et commentaire.
_PS: La requête n'a pas été testée._

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>string</code> | Identifiant d'un dossier |
| reasonId | <code>string</code> | Identifiant d'un motif |
| comment | <code>string</code> | Commentaire |
| params | <code>object</code> | Modifier les paramètres de la requête |

<a name="Skolengo+getAbsenceReasons"></a>

### skolengo.getAbsenceReasons(limit, offset, params)
Récupérer la liste des motifs possibles d'absence.
Cette liste peut être différente pour chaque établissement.

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| limit | <code>number</code> | <code>20</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| params | <code>object</code> |  | Modifier les paramètres de la requête |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.fromConfigObject(config).then(async user => {
  user.getAbsenceReasons().then(response => {
    console.log(`Liste des motifs: ${response.map(r => r.longLabel).join(';')}`)
  })
})
```
<a name="Skolengo+refreshToken"></a>

### skolengo.refreshToken(triggerListener)
Demande un renouvellement du jeu de jeton (tokenSet)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| triggerListener | <code>boolean</code> | <code>true</code> | Si oui, appeler la fonction onTokenRefresh |

<a name="Skolengo+getTokenClaims"></a>

### skolengo.getTokenClaims()
Récupérer les données contenues dans le payload JWT du token ID

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  
<a name="Skolengo.revokeToken"></a>

### Skolengo.revokeToken(oidClient, token)
Révoquer un jeton

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| oidClient | <code>Client</code> | Un client OpenID Connect |
| token | <code>string</code> | Un jeton |

<a name="Skolengo.getAppCurrentConfig"></a>

### Skolengo.getAppCurrentConfig(httpConfig)
Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| httpConfig | <code>AxiosRequestConfig</code> \| <code>undefined</code> | Configuration facultative du client HTTP |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.getAppCurrentConfig().then(config => {
  console.log(`Dernière version déployée: ${config.latestDeployedSkoAppVersion}`)
  console.log(`Dernière version supportée: ${config.latestSupportedSkoAppVersion}`)
})
```
<a name="Skolengo.searchSchool"></a>

### Skolengo.searchSchool(filter, limit, offset, httpConfig)
Rechercher un établissement scolaire

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filter | <code>SchoolFilter</code> |  | Le filtre de recherche |
| limit | <code>number</code> | <code>10</code> | Limite |
| offset | <code>number</code> | <code>0</code> | Offset |
| httpConfig | <code>AxiosRequestConfig</code> \| <code>undefined</code> |  | Configuration facultative du client HTTP |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(schools => {
  console.log(schools)
})
```
**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool({ lat: 48.0, lon: 7.0 }).then(schools => {
  console.log(schools)
})
```
<a name="Skolengo.getOIDClient"></a>

### Skolengo.getOIDClient(school, redirectUri)
Créer un client OpenID Connect permettant l'obtention des jetons (refresh token et access token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| school | <code>School</code> |  | L'établissement scolaire |
| redirectUri | <code>string</code> \| <code>undefined</code> | <code>&quot;skoapp-prod://sign-in-callback&quot;</code> | Callback |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
  if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
  const school = schools[0]
  const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
  console.log(oidClient.authorizationUrl())
  // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanismes OAuth 2.0 et OID Connect)
})
```
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
  if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
  const school = schools[0]
  const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')

  const params = oidClient.callbackParams('skoapp-prod://sign-in-callback?code=OC-9999-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-X')
  const tokenSet = await oidClient.callback('skoapp-prod://sign-in-callback', params)
  // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.

  const user = new Skolengo(oidClient, school, tokenSet)
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
})
```
<a name="Skolengo.fromConfigObject"></a>

### Skolengo.fromConfigObject(config, skolengoConfig)
Créer un client Scolengo à partir d'un objet contenant les informations d'authentification.
Cet objet de configuration peut être généré à partir de l'utilitaire [scolengo-token](https://github.com/maelgangloff/scolengo-token).
Le callback optionnel `onTokenRefresh` est appellé lors du rafraichissement du jeton (pour éventuellement stocker en mémoire le nouveau tokenSet).
La callback optionnel `tokenRefresh` permet d'outrepasser l'utilisation de la librairie `openid-client` pour le rafraîchissement des jetons. La délégation de cette tâche permet l'utilisation de cette librairie dans des environnements externes à Node.js.

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>AuthConfig</code> | Informations d'authentification |
| skolengoConfig | <code>SkolengoConfig</code> | Configuration optionnelle (stockage du jeton renouvellé, client HTTP personnalisé, gestion des erreurs Pronote, ...) |

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
Skolengo.fromConfigObject(config).then(async user => {
  const infoUser = await user.getUserInfo()
  console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
})
```

> [!NOTE]
> ## Liens utiles
> - [Wiki](https://github.com/maelgangloff/scolengo-api/wiki)
> - [Serveur Discord](https://discord.gg/9u69mxsFT6)
> - [JSON:API Specification](https://jsonapi.org/format)
> - [OpenID Connect Specification](https://openid.net/connect)
