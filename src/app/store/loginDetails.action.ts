import { Action } from '@ngrx/store';
import { User } from '../model/User.model';

export const SET_USER = '[USER] ADD';

export class SetUser implements Action {
    readonly type = SET_USER;
    constructor(public payload: User) { }
}

export type Actions = SetUser;
