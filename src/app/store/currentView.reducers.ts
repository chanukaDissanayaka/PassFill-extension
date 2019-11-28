import { currentView } from '../model/CurrentView.model';
import * as currentViewAction from './currentView.action';

const initialState: currentView = {
    homeView: true,
    loginView: false,
    signupView: false,
};

export function currentViewReducer(state: currentView = initialState, action: currentViewAction.Actions) {
    switch (action.type) {
        case currentViewAction.ADD_VIEW:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

