import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = []//[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []}
      //{ data: [ 250, 130, 70, 150 ], backgroundColor: [ '#F05474', '#FABA57', '#5D61F4', '#BFE35B' ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        const labels = Object.keys( data );
        const values = Object.values( data );

        this.doughnutChartData={
          labels: labels,
          datasets:[{data:Object.values(values)}]
        }
      })

  }

}
