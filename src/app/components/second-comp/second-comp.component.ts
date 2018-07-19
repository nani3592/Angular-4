import { ServiceFileService } from './../../services/service-file.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FirstCompComponent } from '../first-comp/first-comp.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'second',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  constructor(public service: ServiceFileService, public dialogRef: MatDialogRef<SecondCompComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }
  close() {
    this.dialogRef.close()
  }
  ngOnInit() {
  }

  clearRecord(flag) {
    if (flag) {
      this.service.flagData.next({ 'status': 'yes', data: this.data })
    }
    this.dialogRef.close()
  }
}


export interface DialogData {
  index: string
}