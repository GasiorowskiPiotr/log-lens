import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CommandTypes, ApplicationAdded, ApplicationRemoved, ErrorsLoaded } from '../actions';

import { ApplicationInsigtsService } from '../services/ApplicationInsigtsService';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApplicationEffects {

    private aiService: ApplicationInsigtsService;

    constructor(private actions$: Actions, private http: Http) { 
        this.aiService = new ApplicationInsigtsService(http);
    }

    @Effect()
    addApplication$: Observable<Action> = 
        this.actions$
            .ofType(CommandTypes.ADD_APPLICATION)
            .map((action: Action) => {
                return action.payload;
            })
            .mergeMap((app: any) => 
                of(new ApplicationAdded(app.appName, app.appKey))
            );

    @Effect()
    loadErrors$: Observable<Action> =
        this.actions$
            .ofType(CommandTypes.LOAD_ERRORS)
            .map((action:Action) => action.payload)
            .mergeMap(app => this.aiService.getForApp(app.appName, app.appKey)
                .map(items => new ErrorsLoaded(app.name, items))
            );
}