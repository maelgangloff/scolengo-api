<a name="Skolengo"></a>

## Skolengo
Support non officiel de l'API de la nouvelle application mobile Skolengo.
Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.

**Remarques importantes:**
 - Il est clairement mentionné que cette librairie est n'est pas officielle.
 - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
 - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
 - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API de l'application Skolengo.
 - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
 - Tout utilisateur de cette librairie a *a priori* lu l'entièreté le fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
 - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
 - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**

**Kind**: global class  

* [Skolengo](#Skolengo)
    * [new Skolengo(auth, school)](#new_Skolengo_new)
    * _instance_
        * [.getUserInfo()](#Skolengo+getUserInfo)
    * _static_
        * [.getAppCurrentConfig()](#Skolengo.getAppCurrentConfig)
        * [.searchSchool(text, limit, offset)](#Skolengo.searchSchool)
        * [.getOauth2Client(school)](#Skolengo.getOauth2Client)

<a name="new_Skolengo_new"></a>

### new Skolengo(auth, school)

| Param | Type | Description |
| --- | --- | --- |
| auth | <code>ClientOAuth2.Token</code> | Informations d'authentification OAuth 2.0 |
| school | <code>School</code> | Etablissement |

<a name="Skolengo+getUserInfo"></a>

### skolengo.getUserInfo()
Informations sur l'utilisateur actuellement authentifié

**Kind**: instance method of [<code>Skolengo</code>](#Skolengo)  
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
<a name="Skolengo.getOauth2Client"></a>

### Skolengo.getOauth2Client(school)
Créer un client OAuth 2.0 permettant l'obtention des jetons (refresh token et access token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  

| Param | Type | Description |
| --- | --- | --- |
| school | <code>School</code> | L'établissement |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
  if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
  const school = schools.data[0]
  Skolengo.getOauth2Client(school, 'skoapp-prod://sign-in-callback').then(oauthClient => {
    console.log(oauthClient.code.getUri())
    // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanisme OAuth 2.0)
  })
})
```
