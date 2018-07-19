import { ServiceFileService } from './../../services/service-file.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'userdetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData;
  divheight;


  constructor(public service: ServiceFileService) {
    this.divheight = window.innerHeight - (57 + 40);
  }

  ngOnInit() {
    this.service.userDetails.subscribe(res => {
      if (res !== 'noData') {
        this.userData = res;
        console.log('res------------>', res)
      }

    })
  }
  close(){
    this.service.close.next('close');
  }

}
