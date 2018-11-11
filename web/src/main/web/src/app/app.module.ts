import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './public/rooms/rooms.component';
import { NavlinkComponent } from './utils/navlink/navlink.component';
import { LoginComponent } from './private/login/login.component';
import { FormsModule } from '@angular/forms';
import { ManageRoomsComponent } from './private/manage-rooms/manage-rooms.component';
import { ManageRoomCategoriesComponent } from './private/manage-room-categories/manage-room-categories.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { environment } from 'src/environments/environment';

export function getBaseUrl(): string {
  if (environment.production) {
    return `${window.location.protocol}//${window.location.hostname}`;
  } else {
    return 'http://localhost:8090';
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    NavlinkComponent,
    LoginComponent,
    ManageRoomsComponent,
    ManageRoomCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: 'BASE_URL',
      useFactory: getBaseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

