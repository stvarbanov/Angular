import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  user: any = {};

  constructor(private requestService: RequestService, private userService: UserService) { }

  ngOnInit(): void {

    this.checkLoggedUser();

    this.getAllRequests();
    console.log(this.requests);
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
      this.requestForm.reset();

    });

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


  getAllRequests() {
    this.requestService.loadAllRequests().subscribe((data) => {
      return this.requests.push(data);
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

      this.getAllRequests();
      //list of requests should update
    })
  }
}

