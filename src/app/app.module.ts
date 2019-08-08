import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { commonService } from './services/common.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from 'src/app/interceptors/httpInterceptor';



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
    commonService,
    {provide: HTTP_INTERCEPTORS , useClass: httpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
