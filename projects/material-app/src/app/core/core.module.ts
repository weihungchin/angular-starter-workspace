import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';
@NgModule({
  declarations: [GlobalLayoutComponent],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // third party
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  exports: [GlobalLayoutComponent],
})
export class CoreModule {}
