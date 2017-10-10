import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';

import {AppComponent, DialogBox} from './app.component';
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule, MatInputModule,
  MatProgressBarModule
} from "@angular/material";
import {TemperatureMonitor} from "./temperatureMonitor.service";
import {By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {

  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormsModule,MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatProgressBarModule,
        MatDialogModule,
        BrowserAnimationsModule],
      providers:[TemperatureMonitor]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should record temperature on valid user input', inject([TemperatureMonitor],  (service: TemperatureMonitor) => {
    service.temperatures = [];
    let element = fixture.debugElement.query(By.css('input')).nativeElement;
    element.value = 8;
    element.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      component.recordTemperature();
      expect(service.temperatures).toEqual([8]);
    });
  }));

  it('it should not record temperature on invalid user input', inject([TemperatureMonitor],  (service: TemperatureMonitor) => {
    service.temperatures = [1, 2];
    let element = fixture.debugElement.query(By.css('input')).nativeElement;
    element.value = 'ab8';
    element.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      component.recordTemperature();
      expect(service.temperatures).toEqual([1, 2]);
    });
  }));

  it('it should not record more than 8 temperatures', inject([TemperatureMonitor],  (service: TemperatureMonitor) => {
    service.temperatures = [1, 2, 3, 4, 5, 6, 7, 8];
    let element = fixture.debugElement.query(By.css('input')).nativeElement;
    element.value = 9;
    element.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      component.recordTemperature();
      expect(service.temperatures).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  }));

  it('it should remove temperature for a given index', inject([TemperatureMonitor],  (service: TemperatureMonitor) => {
    service.temperatures = [1, 2, 3, 4];
    component.removeTemperature(2);
    expect(service.temperatures).toEqual([1, 2, 4]);
  }));

  it('it should return correct median temperature', inject([TemperatureMonitor],  (service: TemperatureMonitor) => {
    service.temperatures = [1, 2, 3, 4, 5];
    component.getCurrentMedian();
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('.median')).nativeElement;
    expect(element.innerText).toContain(3);
  }));

});
