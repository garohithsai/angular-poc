import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RestInterceptor } from 'src/app/interceptors/rest-interceptor';
import { CommonService } from './services/common.service';
import { RestService } from './services/rest.service';



@NgModule({
  declarations: [
    AppComponent
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
    RestService,
    CommonService,
    LoaderService,
    {provide: HTTP_INTERCEPTORS , useClass: RestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
