import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestI } from 'src/app/models/models';
import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, AfterViewInit {

  @ViewChild('requestForm') requestForm!: NgForm;

  isLoggedIn: boolean = false;
  isLoggedAdmin: boolean = false;

  requests: any = [];
  userRequests: any = [];
  user: any = {};


  constructor(private requestService: RequestService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.checkLoggedUser();

    if (this.isLoggedAdmin) {
    
      this.getAllRequests();
    } else {
      this.getUserRequests();
    }

  
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!)
    const ownerId = userObj.id;
    const newRequest: RequestI = {

      title: this.requestForm.value.title,
      city: this.requestForm.value.city,
      adress: this.requestForm.value.adress,
      issue: this.requestForm.value.issue,
      owner: ownerId
    }


    this.requestService.createRequest(newRequest).subscribe((response) => {

      this.reloadCurrentRoute();

    });

  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
   
    if (userObj) {
      this.isLoggedIn = true;
      this.isLoggedAdmin = false;
    }
    if (userObj.isAdmin) {
      this.isLoggedAdmin = true;
      this.isLoggedIn = false;
    }

  }


  getAllRequests() {
    this.requestService.loadAllRequests().subscribe((data) => {
      return this.requests.push(data);
    })
  }
  getUserRequests() {
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!)
    const userId = userObj.id;

    this.requestService.loadUserRequests(userId).subscribe((data) => {
      return this.userRequests.push(data);
    })
  }

  contactUser(requestId: string) {


    const userInfo = document.getElementsByClassName('request-contact-user') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < this.requests[0].length; i++) {

      userInfo[i].style.display = "none";

      if (this.requests[0][i]._id == requestId) {
        this.userService.getUserById(this.requests[0][i].owner).subscribe((data) => {
          this.user = data['user'];
        })
        userInfo[i].style.display = "inline";
      }
    }
  }

  deleteRequest(requestId: string) {

    this.requestService.deleteRequest(requestId).subscribe((data) => {

      this.reloadCurrentRoute();
      //list of requests should update
    })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}

