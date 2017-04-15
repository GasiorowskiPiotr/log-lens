import { Action, ActionReducer } from '@ngrx/store';

export const CommandTypes = {
    ADD_APPLICATION: 'ADD_APPLICATION',
    REMOVE_APPLICATION: 'REMOVE_APPLICATION',
    LOAD_ERRORS: 'LOAD_ERRORS'
};

export const EventTypes = {
    APPLICATION_ADDED: 'APPLICATION_ADDED',
    APPLICATION_REMOVED: 'APPLICATION_REMOVED',
    ERRORS_LOADED: 'ERRORS_LOADED'
};

export class AddApplication implements Action {

    constructor(appName: string, appKey: string) {
        this.payload = {
            appKey: appKey,
            appName: appName
        };
    }    

    type: string = CommandTypes.ADD_APPLICATION;
    payload: {
        appName: string;
        appKey: string;
    }
}

export class ApplicationAdded implements Action {

    constructor(appName: string, appKey: string) {
        this.payload = {
            appKey: appKey,
            appName: appName
        };
    }

    type: string = EventTypes.APPLICATION_ADDED;
    payload: {
        appName: string;
        appKey: string;
    }
}

export class RemoveApplication implements Action {

    constructor(appName: string) {
        this.payload = {
            appName: appName
        };
    }

    type: string = CommandTypes.REMOVE_APPLICATION;
    payload: {
        appName: string
    };

}

export class ApplicationRemoved implements Action {

    constructor(appName: string) {
        this.payload = {
            appName: appName
        };
    }

    type: string = EventTypes.APPLICATION_REMOVED;
    payload: {
        appName: string;
    };
}

export class LoadErrors implements Action {

    constructor(appName: string, appKey: string) {
        this.payload = {
            appKey: appKey,
            appName: appName
        };
    }

    type: string = CommandTypes.LOAD_ERRORS;
    payload: {
        appName: string;
        appKey: string;
    }
}

export class ErrorsLoaded implements Action {

    constructor(appName: string, errors: any[]) {
        this.payload = {
            appName: appName,
            errors: errors
        };
    }

    type: string = EventTypes.ERRORS_LOADED;
    payload: {
        appName: string;
        errors: any[];
    }
}