import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loading$ = new BehaviorSubject(false);

  constructor() {}

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

  getLoading(): boolean {
    return this.loading$.value;
  }
}
