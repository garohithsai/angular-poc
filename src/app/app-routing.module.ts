import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalPageComponent } from './business/form-selection/components/personal-page-component/personal-page-component.component';
import { ReviewPageComponent } from './business/form-selection/components/review-page/review-page.component';


const routes: Routes = [
  { path: '', component: PersonalPageComponent },
  { path: 'review', component: ReviewPageComponent },
  { path: '**', component: PersonalPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
