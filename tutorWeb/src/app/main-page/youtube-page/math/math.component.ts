import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {mathVideos} from "../../../api-objects/mathVideos";

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  mathVid: mathVideos = {mathVideo: ['Professor Leonard', 'Professor Popoca']}

  // @ts-ignore
  constructor(public dialogRef: MatDialogRef<MathComponent>)
  { }

  ngOnInit(): void {
  }


}
