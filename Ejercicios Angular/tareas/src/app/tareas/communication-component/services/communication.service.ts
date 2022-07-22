import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private _parentObservable: BehaviorSubject<string> = new BehaviorSubject<string>('Parent Using Subject');
  private _childObservable : BehaviorSubject<string> = new BehaviorSubject<string>('Child Using Subject');

  envioDatosParent() {
    return 'Parent Using Service';
  }

  envioDatosChild() {
    return 'Child Using Service';
  }

  get observableParent() {
    return this._parentObservable.asObservable();
  }

  get observableChild() {
    return this._childObservable.asObservable();
  }

}
