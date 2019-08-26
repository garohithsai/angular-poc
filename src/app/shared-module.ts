import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RestService } from './common/services/rest.service';
import { CommonService } from './common/services/common.service';
import { FormBuilderService } from './common/services/form-builder/form-builder.service';
import { ErrorComponentComponent } from './common/components/error-component/error-component.component';
import { LoaderService } from './common/services/loader.service';
import { TableComponentComponent } from './common/components/table-component/table-component.component';
import { RestInterceptor } from './common/interceptors/rest-interceptor';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    ErrorComponentComponent,
    HeaderComponent,
    TableComponentComponent
  ],
  exports: [
    ErrorComponentComponent,
    HeaderComponent,
    TableComponentComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
       FormBuilderService,
       RestService,
       CommonService,
       LoaderService,
       {provide: HTTP_INTERCEPTORS , useClass: RestInterceptor, multi: true}
      ]
    };
  }
}
