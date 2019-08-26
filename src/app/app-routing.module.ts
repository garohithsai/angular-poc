import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReviewComponent } from './business/form-review/form-review/form-review.component';


const routes: Routes = [
  { path: '', component: FormReviewComponent },
  { path: '**', component: FormReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
