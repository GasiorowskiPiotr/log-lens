import { ActionReducer, Action } from '@ngrx/store';
import { Application } from '../domain/Application';
import { EventTypes } from '../actions';

export function applicationsReducer(state: Application[] = [], action: Action): Application[] {
    switch(action.type) {
        case EventTypes.APPLICATION_ADDED: {
            return [...state, new Application(action.payload.appName, action.payload.appKey)];
        }
        case EventTypes.APPLICATION_REMOVED: {
            return state.filter((app) => app.Name !== action.payload.appName);
        }
        default: {
            return state;
        }
    }
}