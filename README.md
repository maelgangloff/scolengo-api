<a name="Skolengo"></a>

## Skolengo
Support non officiel de l'API de la nouvelle application mobile Skolengo.
Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.


Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**

**Remarques importantes:**
 - Il est clairement mentionné que cette librairie est n'est pas officielle.
 - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
 - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
 - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API de l'application Skolengo.
 - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
 - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
 - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
 - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.

**Kind**: global class  

* [Skolengo](#Skolengo)
    * [new Skolengo(oidClient, school, tokenSet)](#new_Skolengo_new)
    * _instance_
        * [.getUserInfo()](#Skolengo+getUserInfo)
        * [.getEvaluationsSettings(studentId)](#Skolengo+getEvaluationsSettings)
        * [.getSchoolInfo(schoolId)](#Skolengo+getSchoolInfo)
    * _static_
        * [.revokeToken(oidClient, token)](#Skolengo.revokeToken)
        * [.getAppCurrentConfig()](#Skolengo.getAppCurrentConfig)
        * [.searchSchool(text, limit, offset)](#Skolengo.searchSchool)
        * [.getOIDClient(school)](#Skolengo.getOIDClient)

<a name="new_Skolengo_new"></a>

### new Skolengo(oidClient, school, tokenSet)
Il est possible de s'authentifier en possédant au prélable des jetons OAuth 2.0


| Param | Type | Description |
| --- | --- | --- |
| oidClient | <code>Client</code> | Un client OpenID Connect |
| school | <code>School</code> | Etablissement |
| tokenSet | <code>TokenSet</code> | Jetons d'authentification Open ID Connect |

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

### skolengo.getUserInfo()
Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  
<a name="Skolengo+getEvaluationsSettings"></a>

### skolengo.getEvaluationsSettings(studentId)
Statut des services d'évaluation

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| studentId | <code>string</code> | Identifiant d'un étudiant |

<a name="Skolengo+getSchoolInfo"></a>

### skolengo.getSchoolInfo(schoolId)
Actualités de l'établissement

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| schoolId | <code>string</code> | Identifiant de l'établissement |

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
| limit | <code>number</code> | <code>10</code> | Nombre max d'éléments |
| offset | <code>number</code> | <code>0</code> | Offset |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
  console.log(schools)
})
```
<a name="Skolengo.getOIDClient"></a>

### Skolengo.getOIDClient(school)
Créer un client Open ID Connect permettant l'obtention des jetons (refresh token et access token)

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
