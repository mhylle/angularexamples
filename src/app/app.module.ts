import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewerComponent } from './users/user-viewer/user-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutComponent } from './layout/flex-layout/flex-layout.component';
import { GridlayoutComponent } from './layout/gridlayout/gridlayout.component';
import { HealthIssueSliderComponent } from './slider/health-issue-slider/health-issue-slider.component';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SliderModule} from '@mhylle/slider';

@NgModule({
  declarations: [
    AppComponent,
    UserViewerComponent,
    FlexLayoutComponent,
    GridlayoutComponent,
    HealthIssueSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NouisliderModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
