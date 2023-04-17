import { School } from './School/School'

export type Auth = {
    access_token: string;
    id_token: string;
    refresh_token: string;
    token_type: string;
    expires_at: number;
    scope: string;
}

export type AuthConfig = {
    tokenSet: Auth;
    school: School
}
