import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FirstConponentComponent } from './first-conponent/first-conponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    FirstConponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
