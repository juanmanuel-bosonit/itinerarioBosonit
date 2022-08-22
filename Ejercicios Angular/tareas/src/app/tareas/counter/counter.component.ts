import { Component } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: number = 0;
  step: number = 1;
  up: boolean = true;
  
  public intervalTimer = interval(1000);
  private _unsubscribe$ = new Subject<boolean>();

  start() {

    this.intervalTimer
    .pipe(
      takeUntil( this._unsubscribe$ )
    )
    .subscribe(
      () => this.up ? this.count += this.step : this.count -= this.step
    ) 

  }

  pause() {
    this._unsubscribe$.next(false);
  }

  reset() {
    this.count = 0;
    this.step = 1;
  }

  countUp() {
    this.up = true;
  }

  countDown() {
    this.up = false;
  }

  onChangeSet( event: any ) {
    console.log(event)
    this.count = parseInt( event.target.value );
  }

  onChangeStep( event: any ) {
    this.step = parseInt( event.target.value );
  }


}
