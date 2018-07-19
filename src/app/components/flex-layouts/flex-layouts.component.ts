import { Component, OnInit, OnDestroy } from '@angular/core';
import { USERS } from "../../mocks/userData";
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceFileService } from './../../services/service-file.service';
import 'rxjs';


@Component({
  selector: 'flexlayouts',
  templateUrl: './flex-layouts.component.html',
  styleUrls: ['./flex-layouts.component.scss']
})
export class FlexLayoutsComponent implements OnInit {
  divheight;
  hide= false;
  constructor(public dialog: MatDialog, public service: ServiceFileService) {
    this.divheight = window.innerHeight - (57 + 40);
  }

  ngOnInit() {

  }
  toggle() {
    this.hide = !this.hide;
  }
}


