import { Component, OnInit } from '@angular/core';
import { USERS } from "../../mocks/userData";
import { SecondCompComponent } from '../second-comp/second-comp.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceFileService } from './../../services/service-file.service';
import 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  hide = false;
  userdata = USERS;
  alive = true;
  showDetails = false;
  userInfo;

  constructor(public dialog: MatDialog, public service: ServiceFileService) { }

  ngOnInit() {
    this.service.flagData.subscribe(res => {
      if (res.status === 'yes') {
        const index = this.userdata.findIndex(user => user.name === res.data.name);
        this.userdata.splice(index, 1);
      }
    });



    this.service.close.subscribe(res => {
      if (res === 'close') {
        this.showDetails = false;
      }
    });
  }
  toggle() {
    this.hide = !this.hide;
  }

  details(data) {
    this.userInfo = data;
    this.showDetails = true;
    this.service.userDetails.next(data)
    if (this.showDetails) {

    } else {

    }


  }


  filter(data) {
     
    const data1 = this.userdata.filter(x => {
      if (x.name.includes(data) || (x.age.includes(data)) || (x.dept.includes(data))) {
        return true;
      }
    })
    console.log(data1)
  }


  close(data) {
    const dialogRef = this.dialog.open(SecondCompComponent, {
      width: '300px',
      height: '170px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  ngOnDestroy() {
    this.alive = false;
  }
}


export interface DialogData {
  index: string
}