import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  constructor() {}
  getData() {
    return this.data;
  }

  setData(val) {
    this.data = val;
  }
}
