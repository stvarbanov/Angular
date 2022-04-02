import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: any;

  constructor() {


  }

  ngOnInit(): void {
    this.checkLoggedUser()
  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj != null) {
      this.isLoggedIn = true;
      this.user = userObj;
    }

  }
  logout() {
    localStorage.clear();
  }

  edit(){
    alert('TO DO...')
  }
}
