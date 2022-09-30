import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Things to include:
// ✔ components from libraries
// ✔ contains common components/directives/pipes to be used in lazy-loaded feature
// should not contain any services 

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule],
})
export class SharedModule {}
