import { SessionService } from './session.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SessionService,
    AuthService,
    AuthGuard
  ]
})
export class ServicesModule { }
