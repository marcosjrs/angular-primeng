import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    ButtonModule
  ],
  exports:[
    MenubarModule,
    CardModule,
    AccordionModule,
    ButtonModule
  ]
})
export class PrimengModule { }
