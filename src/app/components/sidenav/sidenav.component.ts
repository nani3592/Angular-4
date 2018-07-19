import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  divheight;
  constructor() { }

  ngOnInit() {
    this.divheight = window.innerHeight - (57 + 40);
  }

}
