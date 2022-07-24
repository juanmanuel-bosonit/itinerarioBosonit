import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
    .col-8{
      background-color: var(--surface-c);
    }
  `]
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
