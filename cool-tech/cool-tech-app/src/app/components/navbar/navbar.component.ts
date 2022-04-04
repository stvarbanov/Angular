import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  isLoggedAdmin: boolean = false;

  constructor(private userService: UserService) { }



  ngOnInit(): void {
    this.checkLoggedUser();
  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj) {
      this.isLoggedIn = true;
    }
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
      this.isLoggedIn = false;
    }
  }

}
