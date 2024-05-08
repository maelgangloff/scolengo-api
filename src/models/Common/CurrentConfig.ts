export interface AppCurrentConfig {
  /**
   * Identifiant
   */
  id: string
  /**
   * Version de la dernière version de l'application Skolengo déployée
   */
  latestDeployedSkoAppVersion: string
  /**
   * Version de la dernière version de l'application Skolengo supportée
   */
  latestSupportedSkoAppVersion: string
  /**
   * Délais entre deux tentatives d'appel à l'API (en ms)
   */
  apiCallRetryDelay: number
  /**
   * Nombre maximal de tentatives de requête à l'API
   */
  apiCallMaxRetries: number
  /**
   * Lien d'information concernant le déploiement de l'application
   */
  skoAppDeploymentInfoUrl: string
}
