import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './auth/account-page/account/account.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    RegisterComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule],
  exports: [
    CommonModule,
    HomepageComponent,
    RegisterComponent,
    AccountComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
