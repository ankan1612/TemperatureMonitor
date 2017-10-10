import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitor {

  temperatures: number[];

  constructor() {
    this.temperatures = [];
  }

  recordTemperature(newTemp: number): void{
      this.temperatures.push(newTemp);
  }

  removeTemperature(index: number): void{
    if(index>=0 && index<this.temperatures.length) {
      this.temperatures.splice(index, 1);
    }
  }

  getCurrentMedian(): number{
    let n: number = this.temperatures.length;
    if(n>0) {
      this.temperatures.sort((a: number, b: number) => {
        return a - b;
      });
      if (n % 2 === 0) {
        return (this.temperatures[Math.floor(n / 2 - 1)] + this.temperatures[Math.floor(n / 2)]) / 2;
      }
      else {
        return this.temperatures[Math.floor(n / 2)];
      }
    }
  }
}
