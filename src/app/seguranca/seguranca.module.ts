import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';

import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LogoutService } from './logout.service';
import { environment } from 'src/environments/environment';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhiteListDomains,
        blacklistedRoutes: environment.tokenBlackListDomains
      }
    }),
    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule
  ],
  providers: [
    LogoutService
    // AuthGuard
  ]
})
export class SegurancaModule { }
