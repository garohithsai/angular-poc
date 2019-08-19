import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonService } from './services/common.service';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RestInterceptor } from '../app/interceptors/rest-interceptor';
import { PersonalPageComponent } from './components/personal-page-component/personal-page-component.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    ReviewPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers : [
    CommonService,
    LoaderService,
    {provide: HTTP_INTERCEPTORS , useClass: RestInterceptor, multi: true}
  ],
  exports: [
    PersonalPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
