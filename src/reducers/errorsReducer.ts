import { ActionReducer, Action } from '@ngrx/store';
import { EventTypes } from '../actions';

export function errorsReducer(state: any[] = [], action: Action): any[] {
    switch(action.type) {
        case EventTypes.ERRORS_LOADED: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}