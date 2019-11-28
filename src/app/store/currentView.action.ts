import { Action } from '@ngrx/store';
import { currentView } from '../model/CurrentView.model';

export const ADD_VIEW = '[CURRENTVIEW] ADD';

export class AddView implements Action {
    readonly type = ADD_VIEW;

    constructor(public payload: currentView) { }
}
export type Actions = AddView;
