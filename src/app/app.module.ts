import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './common/services/router.service';

import { PersonalPageComponent } from './business/form-review/components/personal-page-component/personal-page-component.component';
import { DashboardComponent } from './business/form-review/components/dashboard/dashboard.component';
import { FormReviewModule } from './business/form-review/form-review.module';
import { FooterComponent } from './common/components/footer/footer.component';
import { SharedModule } from './shared-module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPageComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormReviewModule,
    MaterialModule,
    SharedModule.forRoot()
  ],
  providers : [
    RouterService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
