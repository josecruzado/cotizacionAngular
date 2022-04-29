import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SharedModule } from '@shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports:[
    LoginFormComponent,
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
