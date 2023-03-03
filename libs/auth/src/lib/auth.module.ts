import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginPageComponent],
})
export class AuthModule {}
