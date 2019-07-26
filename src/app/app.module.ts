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

import {HealthissueOverviewComponent} from './overview/healthissue-overview/healthissue-overview.component';
import {HealthissueDetailsComponent} from './overview/healthissue-overview/healthissue-details/healthissue-details.component';
import {EpisodeofcareDetailsComponent} from './overview/healthissue-overview/episodeofcare-details/episodeofcare-details.component';

import {ViewerComponent} from './components/viewer/viewer.component';

import {ChildComponent} from './components/child/child.component';
import {InnerChildComponent} from './components/inner-child/inner-child.component';
import {MainComponent} from './components/main/main.component';
import { OuterComponent } from './cssInheritance/outer/outer.component';
import { InnerComponent } from './cssInheritance/inner/inner.component';
import { DynamicHeightsComponent } from './components/dynamic-heights/dynamic-heights.component';
import { IssueComponent } from './components/dynamic-heights/issue/issue.component';
import { AsyncSortingComponent } from './components/async-sorting/async-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewerComponent,
    FlexLayoutComponent,
    GridlayoutComponent,
    HealthIssueSliderComponent,
    HealthissueOverviewComponent,
    HealthissueDetailsComponent,
    EpisodeofcareDetailsComponent,
    ViewerComponent,
    ChildComponent,
    InnerChildComponent,
    MainComponent,
    OuterComponent,
    InnerComponent,
    DynamicHeightsComponent,
    IssueComponent,
    AsyncSortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NouisliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
