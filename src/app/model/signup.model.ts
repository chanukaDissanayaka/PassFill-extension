import { User } from './User.model';

export interface SignupRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignupResponse {
    valid: boolean;
    error: string;
    user: User;
}

