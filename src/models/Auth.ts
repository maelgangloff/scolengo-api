import { School } from './School/School'

export interface Auth {
    access_token: string;
    id_token: string;
    refresh_token: string;
    token_type: string;
    expires_at: number;
    scope: string;
}

export interface AuthConfig {
    tokenSet: Auth;
    school: School
}
