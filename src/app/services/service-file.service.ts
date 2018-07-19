import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ServiceFileService {
  flagData;
  userDetails;
  close;

  event = new EventEmitter<any>();
  constructor() {
    this.flagData = new Subject();
    this.close= new Subject();
    this.userDetails = new BehaviorSubject('noData');
   }
}
