import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserViewerComponent} from './users/user-viewer/user-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutComponent} from './layout/flex-layout/flex-layout.component';
import {GridlayoutComponent} from './layout/gridlayout/gridlayout.component';
import {HealthIssueSliderComponent} from './slider/health-issue-slider/health-issue-slider.component';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SliderModule} from '@mhylle/slider';
import {HealthissueOverviewComponent} from './overview/healthissue-overview/healthissue-overview.component';
import {HealthissueDetailsComponent} from './overview/healthissue-overview/healthissue-details/healthissue-details.component';
import {EpisodeofcareDetailsComponent} from './overview/healthissue-overview/episodeofcare-details/episodeofcare-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewerComponent,
    FlexLayoutComponent,
    GridlayoutComponent,
    HealthIssueSliderComponent,
    HealthissueOverviewComponent,
    HealthissueDetailsComponent,
    EpisodeofcareDetailsComponent
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
export class AppModule {
}
