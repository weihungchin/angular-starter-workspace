import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Things to include:
// components from libraries
// common components/directives/pipes to use in lazy-loaded feature

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule],
})
export class SharedModule {}
