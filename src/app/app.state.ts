import { currentView } from './model/CurrentView.model';
import { User } from './model/User.model';

export interface AppState {
    readonly CurrentView: currentView;
    readonly User: User;
}
