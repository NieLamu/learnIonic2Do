import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Dialogs} from "@ionic-native/dialogs";


import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TaskListPage } from "../pages/task-list/task-list";

export const firebaseConfig = {
  apiKey: "AIzaSyDpTvMlt1Baw6wLObPPuuHeuXntiNmOmlQ",
  authDomain: "ionic2do-29c2e.firebaseapp.com",
  databaseURL: "https://ionic2do-29c2e.firebaseio.com",
  projectId: "ionic2do-29c2e",
  storageBucket: "ionic2do-29c2e.appspot.com",
  messagingSenderId: "697437754055"
}

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
