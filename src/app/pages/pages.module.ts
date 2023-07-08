import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimengModule
  ]
})
export class PagesModule { }
