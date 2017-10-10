import { TestBed, inject } from '@angular/core/testing';

import { TemperatureMonitor } from './temperatureMonitor.service';

describe('TemperatureMonitor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitor]
    });
  });

  it('should be created', inject([TemperatureMonitor], (service: TemperatureMonitor) => {
    expect(service).toBeTruthy();
  }));

  it('should record new temperature', inject([TemperatureMonitor], (service: TemperatureMonitor) => {
    service.recordTemperature(8);
    expect(service.temperatures).toEqual([8]);
  }));

  it('should remove temperature at a given index', inject([TemperatureMonitor], (service: TemperatureMonitor) => {
    service.temperatures = [3, 5, 7, 8, 90];
    service.removeTemperature(3);
    expect(service.temperatures).toEqual([3, 5, 7, 90]);
  }));

  it('should calculate correct median', inject([TemperatureMonitor], (service: TemperatureMonitor) => {
    service.temperatures = [8, 3, 90, 5, 7];
    let median = service.getCurrentMedian();
    expect(median).toEqual(7);

    service.temperatures = [8, 3, 90, 5, 7, 9];
    median = service.getCurrentMedian();
    expect(median).toEqual(7.5);
  }));
});

