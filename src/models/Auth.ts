export interface Auth {
    access_token: string;
    id_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}

export interface JWT_AT {
    sub: string;
    oauthClientId: string;
    clientName: string;
    roles: any[];
    iss: string;
    client_id: string;
    grant_type: string;
    permissions: any[];
    scope: string;
    serverIpAddress: string;
    longTermAuthenticationRequestTokenUsed: boolean;
    state: string;
    exp: number;
    iat: number;
    jti: string;
    email: string;
    clientIpAddress: string;
    isFromNewLogin: boolean;
    authenticationDate: string;
    successfulAuthenticationHandlers: string;
    profile: string;
    userAgent: string;
    given_name: string;
    nonce: string;
    credentialType: string;
    aud: string;
    authenticationMethod: string;
    geoLocation: string;
    scopes: string;
    family_name: string;
}
