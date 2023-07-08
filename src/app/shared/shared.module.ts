import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';

const COMPONENTS = [
  MenuComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [ CommonModule, PrimengModule ]
})
export class SharedModule { }
