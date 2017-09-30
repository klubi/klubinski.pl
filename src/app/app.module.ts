import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';
import {ExperienceComponent} from './elements/experience/experience.component';
import {CourseComponent} from './elements/course/course.component';
import {AfterHoursComponent} from './elements/after-hours/after-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    ExperienceComponent,
    CourseComponent,
    AfterHoursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
