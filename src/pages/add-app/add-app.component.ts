import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/AppState';
import { AddApplication } from '../../actions';

@Component({
    selector: 'add-app',
    templateUrl: 'add-app.html'
})
export class AddAppPage {

    private newApp: FormGroup;

    constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
        this.newApp = this.formBuilder.group({
            name: ['', Validators.required],
            key: ['', Validators.required]
        });
    }

    public submit() {
        this.store.dispatch(new AddApplication(this.newApp.value.name, this.newApp.value.key));
    }

}