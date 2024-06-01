import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

const modulosprime: any = [
  ButtonModule,
  ToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulosprime
  ],
  exports: [
    modulosprime
  ]
})
export class PrimengModule { }
