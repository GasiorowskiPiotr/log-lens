import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/AppState';

import { LoadErrors } from '../../actions';

@Component({
    selector: 'error-list',
    templateUrl: 'error-list.html'
})
export class ErrorListComponent implements OnInit {

    private errors: any[] = [];

    constructor(
        private navCtrl: NavController, 
        private navParams: NavParams, 
        private loadingCtrl: LoadingController,
        private store: Store<AppState>) { }

    public ngOnInit() {
        const loader = this.loadingCtrl.create({
            content: 'Loading errors for ' + this.navParams.get('name'),
            dismissOnPageChange: true
        });

        loader.present().catch(console.log.bind(console));

        this.store.select<any[]>('errors').do(_ => loader.dismiss().catch(console.log.bind(console))).subscribe(e => this.errors = e);

        this.store.dispatch(new LoadErrors(this.navParams.get('name'), this.navParams.get('key')));
    }

}