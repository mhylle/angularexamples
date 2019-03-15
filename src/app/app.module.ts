import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewerComponent } from './users/user-viewer/user-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutComponent } from './layout/flex-layout/flex-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewerComponent,
    FlexLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
