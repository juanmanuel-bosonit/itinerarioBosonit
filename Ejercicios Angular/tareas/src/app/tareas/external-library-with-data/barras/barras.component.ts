import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SWPlanets } from '../interfaces/SWPlanets.interfaces';
import { SWPlanetsService } from '../services/SWPlanets.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  constructor( private swPlanetsServices: SWPlanetsService ) { }

  planets: SWPlanets[] = [];
  planetNames: string[] = [];
  planetDiameter: number[] = [];
  planetOrbitalPeriod: number[] = [];
  planetRotationPeriod: number[] = [];

  ngOnInit(): void {
    this.swPlanetsServices.getAllPlanets()
      .subscribe( datos => {

        this.planets = datos.results;

        this.planets.forEach( ( planet ) => {
          this.planetNames.push( planet.name )
          this.planetOrbitalPeriod.push( planet.orbital_period )
          this.planetDiameter.push( planet.diameter )
          this.planetRotationPeriod.push( planet.rotation_period )
        }) 

        this.barChartData.labels!.slice(0,9).push(this.planetNames);
        this.chart.render()
      })
  }
 
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }  
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {    
    datasets: [
      { data: this.planetDiameter, label: 'Diameter' },
      { data: this.planetOrbitalPeriod, label: 'Orbital Period' },
      { data: this.planetRotationPeriod, label: 'Rotation Period' }
    ],
    labels: this.planetNames
  }

}