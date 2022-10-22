import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MinimoValidatorDirective, NumericoDirective } from './directives';




@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective
  ]
})
export class SharedModule { }
