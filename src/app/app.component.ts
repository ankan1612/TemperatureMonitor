import {Component, Inject} from '@angular/core';
import {TemperatureMonitor} from "./temperatureMonitor.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  selectable: boolean = true;
  removable: boolean = true;
  tempInp: number=null;
  maxSize: number = 8;
  filled: number = 0;
  median: number;
  error: any={};


  constructor(private tm: TemperatureMonitor, public dialog: MatDialog){}

  recordTemperature(): void{
    if(isNaN(this.tempInp)){
      this.error = {data : { error : "Only numbers allowed! Please enter a valid number!"}};
      this.openDialog();
    }
    else if(this.tm.temperatures.length>=this.maxSize){
      this.error = {data : { error : "Maximum size of 8 reached! Can't add any more temperature!"}};
      this.openDialog();
    }
    else if(this.tempInp!==null){
      this.tm.recordTemperature(+this.tempInp);
      this.filled = (this.tm.temperatures.length/this.maxSize)*100;
      this.tempInp = null;
    }
  }
  removeTemperature(index: number): void {
    this.tm.removeTemperature(index);
    this.filled = (this.tm.temperatures.length/this.maxSize)*100;
  }

  getCurrentMedian(): void{
    this.median = this.tm.getCurrentMedian();
  }

  openDialog() {
    this.dialog.open(DialogBox,this.error);
  }
}

@Component({
  selector: 'dialog-box',
  templateUrl: 'app.dialogBox.html',
})
export class DialogBox {
  constructor(public dialogRef: MatDialogRef<DialogBox>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
