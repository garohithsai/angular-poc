import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReviewComponent } from './business/form-review/form-review/form-review.component';
import { ReviewPageComponent } from './business/form-review/components/review-page/review-page.component';
import { GuidelineComponent } from './business/form-review/components/guideline/guideline.component';


const routes: Routes = [
  { path: '', component: FormReviewComponent },
  { path: 'reviewDashboard', component: ReviewPageComponent },
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
