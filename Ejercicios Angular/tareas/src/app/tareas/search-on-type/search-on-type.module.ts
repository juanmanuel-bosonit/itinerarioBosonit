import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { ListComponent } from './list/list.component';
import { SearchComponent } from './search-bar/search.component';



@NgModule({
  declarations: [
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    SearchComponent,
    ListComponent
  ]
})
export class SearchOnTypeModule { }
