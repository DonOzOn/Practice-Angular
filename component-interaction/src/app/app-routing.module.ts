import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstConponentComponent } from './first-conponent/first-conponent.component';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  { path: '', component: FirstConponentComponent },
  { path: 'progress', component: ProgressBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
