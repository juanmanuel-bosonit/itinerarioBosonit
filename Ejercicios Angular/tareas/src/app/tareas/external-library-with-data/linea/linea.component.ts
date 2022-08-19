import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SWPlanets } from '../interfaces/SWPlanets.interfaces';
import { SWPlanetsService } from '../services/SWPlanets.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styles: [
  ]
})
export class LineaComponent implements OnInit {

  constructor( private swPlanetsServices: SWPlanetsService ) { }

  planets: SWPlanets[] = [];
  planetNames: string[] = [];
  planetPopulation: number[] = [];
  planetDiameter: number[] = [];

  ngOnInit(): void {
    
    this.swPlanetsServices.getAllPlanets()
      .subscribe( data => {

        this.planets = data.results;

        this.planets.forEach( ( planet ) => {
          this.planetNames.push( planet.name )
          this.planetPopulation.push( planet.population )
          this.planetDiameter.push( planet.diameter )
        })   

        this.lineChartData.labels!.slice( 0,9 ).push( this.planetNames );
        this.chart.render()
      }) 
  }

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    
    datasets: [
      { 
        data: this.planetPopulation, 
        label: 'Population',
        backgroundColor: 'rgba(148,159,177,0.2)',
        pointBorderColor: '#fff',
      },
      {
        data: this.planetDiameter, 
        label: 'Diameter',
        backgroundColor: 'rgba(148,159,177,0.2)',
        pointBorderColor: '#aaa',
      }
    ],
    labels: this.planetNames,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': { position: 'left' },
      'y-axis-1': { 
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
          ticks: {
          color: 'green'
        }
      }
    }
  }
  public lineChartType: ChartType = 'line';

}
