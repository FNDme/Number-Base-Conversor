import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ValueService {
  private sharedValueSubject$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  get valueObservable() {
    return this.sharedValueSubject$.asObservable();
  }

  set setValue(value: number) {
    this.sharedValueSubject$.next(value);
  }
}