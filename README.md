<a name="Skolengo"></a>

## Skolengo
Support non officiel de l'API de la nouvelle application mobile Skolengo.
Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**

**Kind**: global class  

* [Skolengo](#Skolengo)
    * [.getAppCurrentConfig()](#Skolengo.getAppCurrentConfig) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code>
    * [.searchSchool(text, limit, offset)](#Skolengo.searchSchool) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code>
    * [.getOauth2Client(school)](#Skolengo.getOauth2Client) ⇒ <code>Promise.&lt;ClientOAuth2&gt;</code>

<a name="Skolengo.getAppCurrentConfig"></a>

### Skolengo.getAppCurrentConfig() ⇒ <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code>
Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code> - La configuration actuelle de l'app  
<a name="Skolengo.searchSchool"></a>

### Skolengo.searchSchool(text, limit, offset) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code>
Rechercher un établissement scolaire

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code> - Les établissements cherchés  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | Le nom partiel de l'établissement |
| limit | <code>number</code> | <code>10</code> | Nombre max d'éléments |
| offset | <code>number</code> | <code>0</code> | Offset |

<a name="Skolengo.getOauth2Client"></a>

### Skolengo.getOauth2Client(school) ⇒ <code>Promise.&lt;ClientOAuth2&gt;</code>
Créer un client OAuth 2.0 permettant l'obtention des jetons (refresh token et access token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;ClientOAuth2&gt;</code> - Le client OAuth 2.0  

| Param | Type | Description |
| --- | --- | --- |
| school | <code>School</code> | L'établissement |

