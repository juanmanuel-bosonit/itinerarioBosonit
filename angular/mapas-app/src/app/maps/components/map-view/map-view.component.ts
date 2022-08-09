import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';

import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElemen!: ElementRef;

  constructor( 
    private placesService: PlacesService,
    private mapService: MapService
     ) { }

  ngAfterViewInit(): void {

    if( !this.placesService.userLocation ) {
      throw Error('No hay placesService.userLocation')
    };

    const map = new Map({
      container: this.mapDivElemen.nativeElement,
      style: 'mapbox://styles/mapbox/navigation-guidance-night-v2', // style URL
      center: this.placesService.userLocation,
      zoom: 14,
    });

    const popup = new Popup()
            .setHTML(`
              <h6>Aquí Estoy</h6>
              <span>Estoy en este lugar del mundo</span>
            `);

    new Marker({ color: 'red' })
          .setLngLat(this.placesService.userLocation)
          .setPopup(popup)
          .addTo( map )

    this.mapService.setMap ( map );
    
  }

}
