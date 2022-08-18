import { Component, Input, OnInit } from '@angular/core';

import { Universidades } from '../interfaces/universidad.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.87);
      }
    `
  ]
})
export class ListComponent implements OnInit {

  @Input() universidades!: Universidades[];

  activeState: boolean[] = [true, false, false];

  constructor() {}

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }


  ngOnInit(): void {
  }

  

}
