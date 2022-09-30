import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';

@NgModule({
  declarations: [
    GlobalLayoutComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
})
export class CoreModule {}
