import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from "./../environments/environment";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent,
    LoadingComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ...AppStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestoreModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
