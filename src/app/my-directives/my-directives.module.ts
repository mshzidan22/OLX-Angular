import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { BorderDirective } from './border.directive';
import { DisableElementDirective } from './disable-element.directive';



@NgModule({
  declarations: [HighlightDirective, BorderDirective, DisableElementDirective],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirective,
    BorderDirective
  ]
})
export class MyDirectivesModule { }
