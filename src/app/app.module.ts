import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorComponentComponent } from './common/components/error-component/error-component.component';
import { CommonService } from './common/services/common.service';
import { LoaderService } from './common/services/loader.service';
import { RestService } from './common/services/rest.service';
import { ServiceInterceptor } from './common/interceptors/ServiceInterceptor';
import { RouterService } from './common/services/router.service';

import { PersonalPageComponent } from './business/form-review/components/personal-page-component/personal-page-component.component';
import { ReviewPageComponent } from './business/form-review/components/review-page/review-page.component';
import { HeaderComponent } from './common/components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    ReviewPageComponent,
    ErrorComponentComponent,
    HeaderComponent
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
    RouterService,
    {provide: HTTP_INTERCEPTORS , useClass: ServiceInterceptor, multi: true},
    RestService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
