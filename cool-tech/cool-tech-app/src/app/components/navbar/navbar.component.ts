import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  isLoggedAdmin: boolean = false;

  constructor(private notify: NotifyService) { }

  


  ngOnInit(): void {
    this.checkLoggedUser();

    // this.notify.show('Navbar demo', 'error');
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
