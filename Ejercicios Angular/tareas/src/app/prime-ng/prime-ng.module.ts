import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    MenubarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
