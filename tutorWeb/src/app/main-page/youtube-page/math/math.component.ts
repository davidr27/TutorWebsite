import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  // @ts-ignore
  constructor(public dialogRef: MatDialogRef<MathComponent>)
  { }

  ngOnInit(): void {
  }


}
