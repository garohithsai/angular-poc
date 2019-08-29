import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './business/form-review/components/dashboard/dashboard.component';
import { FormSubmitComponent } from './business/form-review/components/form-submit/form-submit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'guideline/:formId',
    loadChildren: './business/form-review/components/guideline/guideline.module#GuidelineModule', pathMatch: 'full',
  },
  { path: 'formSubmit', component: FormSubmitComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
