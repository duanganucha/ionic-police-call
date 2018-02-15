import { ListPage } from './../pages/list/list';
import { MapPage } from './../pages/map/map';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';



import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';


import { CallNumber } from '@ionic-native/call-number';
import { ListDetailPage } from '../pages/list-detail/list-detail';

import { AdMobFree } from '@ionic-native/admob-free';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,MapPage,ListPage,ListDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCF3aH2Bk1v1-AOIaeDWFXzfsNjK0dh558'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,MapPage,ListPage,ListDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Geolocation,CallNumber,AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
