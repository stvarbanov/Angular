import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  // inputs: ['ongoingUpdate', 'updatingId']
})
export class DevicesComponent implements OnInit {

  devices: any = [];
  isLoggedAdmin = false;

  constructor(

  ) { }


  ngOnInit(): void {

    this.checkLoggedUser();

  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

  }


}