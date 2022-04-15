import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  inputs: ['ongoingUpdate', 'updatingId']
})
export class DevicesComponent implements OnInit {

  devices: any = [];
  isLoggedAdmin = false;

  @Input() ongoingUpdate: boolean = false;
  @Input() idBeingUpdated: string = 'id';

  constructor(

  ) { }


  ngOnInit(): void {

    this.checkLoggedUser();

  }

  OnChanges() {
    console.log('parent' + this.ongoingUpdate);
    console.log('parent' + this.idBeingUpdated);

  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

  }


}