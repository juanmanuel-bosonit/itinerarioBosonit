import { Component, OnInit } from '@angular/core';
import { Universidades } from '../interfaces/universidad.interface';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      input {
        width: 500px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {

  country: string = '';
  universidades: Universidades[] = [];
  name: string = '';

  color: string = '';
  color2: string = '';
  color3: string = '';

  clickedSp: boolean = false;
  clickedUk: boolean = false;
  clickedPt: boolean = false;

  constructor( private uniService: ServiceService ) { }

  ngOnInit(): void {
  }

  keyPressed( event: any ) {
      this.name = event.target.value;
      this.uniService.buscar(this.country, this.name)
      .subscribe(
        universidades => this.universidades = universidades,
        (err) => this.universidades = []
      )
  }

  changeColor( event: MouseEvent, id: string ) {

    if( id == 'sp' && event.type == 'mouseover' && !this.clickedSp ) {
      this.color = 'p-button-warning';
    }

    if( id == 'sp' && event.type == 'mouseout' && !this.clickedSp ) {
      this.color = 'p-button-primary';
    }

    if( id == 'uk' && event.type == 'mouseover' && !this.clickedUk ) {
      this.color2 = 'p-button-warning';
    }

    if( id == 'uk' && event.type == 'mouseout' && !this.clickedUk ) {
      this.color2 = 'p-button-primary';
    }

    if( id == 'pt' && event.type == 'mouseover' && !this.clickedPt ) {
      this.color3 = 'p-button-warning';
    }

    if( id == 'pt' && event.type == 'mouseout' && !this.clickedPt ) {
      this.color3 = 'p-button-primary';
    }

  }

  buttonClicked( event: MouseEvent, id: string ) {

    if( id == 'sp' && event.type == 'click' ) {
      this.clickedSp = true;
      this.clickedUk = false;
      this.clickedPt = false;
      this.country = 'spain';
      this.universidades = [];
    }

    if( id == 'uk' && event.type == 'click' ) {
      this.clickedUk = true;
      this.clickedSp = false;
      this.clickedPt = false;
      this.country = 'united kingdom';
      this.universidades = [];
    }

    if( id == 'pt' && event.type == 'click' ) {
      this.clickedPt = true;
      this.clickedSp = false;
      this.clickedUk = false;
      this.country = 'portugal';
      this.universidades = [];
    }

    if( this.clickedSp ) {
      this.color = 'p-button-success';
    } else {
      this.color = 'p-button-primary';
    }

    if( this.clickedUk ) {
      this.color2 = 'p-button-success';
    } else {
      this.color2 = 'p-button-primary';
    }

    if( this.clickedPt ) {
      this.color3 = 'p-button-success';
    } else {
      this.color3 = 'p-button-primary';
    }
  }

}
