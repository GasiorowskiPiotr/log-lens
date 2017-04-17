import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddAppPage } from '../pages/add-app/add-app.component';
import { ErrorListComponent } from '../pages/error-list/error-list.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { applicationsReducer } from '../reducers/applicationsReducer';
import { errorsReducer } from '../reducers/errorsReducer';

import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from '../effects/applicationEffects';

import { ApplicationInsigtsService } from '../services/ApplicationInsigtsService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddAppPage,
    ErrorListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ applications: applicationsReducer, errors: errorsReducer }, { applications: [], errors: [] }),
    EffectsModule.run(ApplicationEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddAppPage,
    ErrorListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApplicationInsigtsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
