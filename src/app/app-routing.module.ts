import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReviewComponent } from './business/form-review/form-review/form-review.component';
import { DashboardComponent } from './business/form-review/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'guideline/:formId',
    loadChildren: './business/form-review/components/guideline/guideline.module#GuidelineModule', pathMatch: 'full',
  },
  { path: '**', component: FormReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
