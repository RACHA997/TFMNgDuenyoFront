import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DuenyoFront';


  constructor( private dialog :MatDialog) { }
 openDialog() {
    this.dialog.open(DialogComponent, {
      width : '30%'
    });
  }
 
}
