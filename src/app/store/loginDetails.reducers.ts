import { User } from '../model/user.model';
import * as loginDetailsAction from './loginDetails.action';

const initUser: User = {
    id: 0,
    name: null,
};

export function loginDetailsReducer(state: User = initUser, action: loginDetailsAction.Actions) {
    switch (action.type) {
        case loginDetailsAction.SET_USER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
