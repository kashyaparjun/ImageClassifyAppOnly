import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpprovProvider } from '../providers/httpprov/httpprov';
import { ListPage } from '../pages/list/list';
import { ImgPage } from '../pages/img/img';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ImgPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ImgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpprovProvider
  ]
})
export class AppModule {}
