import { User } from './User.model';

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    loginStatus: boolean;
    LoggedInUser: User;
}

