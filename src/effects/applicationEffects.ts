import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CommandTypes, ApplicationAdded, ApplicationRemoved, ErrorsLoaded } from '../actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApplicationEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    addApplication$: Observable<Action> = 
        this.actions$
            .ofType(CommandTypes.ADD_APPLICATION)
            .map((action: Action) => {
                return action.payload;
            })
            .mergeMap((app: any) => of(new ApplicationAdded(app.appName, app.appKey))
            ); 
}