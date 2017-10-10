import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatChipsModule, MatIconModule,
  MatProgressBarModule, MatDialogModule
} from '@angular/material';


import {AppComponent, DialogBox} from './app.component';
import {TemperatureMonitor} from "./temperatureMonitor.service";

@NgModule({
  declarations: [
    AppComponent,
    DialogBox
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [TemperatureMonitor],
  bootstrap: [AppComponent],
  entryComponents: [DialogBox]
})
export class AppModule { }
