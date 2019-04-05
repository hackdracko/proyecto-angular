import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './../material.module';
import { ComponentRoutingModule } from './component-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    UserComponent,
    UserAddComponent
  ]
})
export class ComponentModule { }
