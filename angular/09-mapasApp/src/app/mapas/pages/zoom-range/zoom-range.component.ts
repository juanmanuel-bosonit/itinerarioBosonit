import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .row{
        background-color: white;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        border-radius: 5px;
        position: fixed;
        z-index: 999;
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel: number = 0;
  center: [number, number] = [  -2.4502172816024133, 42.442390360066184 ]; // Longitud, Latitud

  constructor() { }

  // Es una buena práctica, para evitar fugas de memoria
  // Destruir los listeners que se hayan creado.
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center,
      zoom: this.zoomLevel
    });

    // Listener para escuchar cuando el zoom cambia sin usar los botones.
    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();

      this.center = [ lng, lat ];
    })

  }

  zoomIn() {
    this.mapa.zoomIn();

    this.zoomLevel = this.mapa.getZoom();
  }

  zoomOut() {
    this.mapa.zoomOut();

    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio( valor: string ){
    this.mapa.zoomTo( Number(valor) )
  }

}
