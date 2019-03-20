import { MoneyHttp } from './../seguranca/money-http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { GrowlModule } from 'primeng/components/growl/growl';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  exports: [
    GrowlModule,
    ConfirmDialogModule,

    NavbarComponent
  ],
  providers: [
    ConfirmationService,
    MessageService,
    ErrorHandlerService,
    AuthService,
    Title,
    JwtHelperService,
    MoneyHttp,

    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
