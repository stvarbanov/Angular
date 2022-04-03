import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestI } from 'src/app/models/models';
import { RequestService } from 'src/app/services/request.service';

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

  constructor(private requestService: RequestService) { }

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
      console.log(response)

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

      if (this.requests[0][i]._id == requestId) {

        // await this.

        userInfo[i].style.display = "inline";
      }
    }
  }
}

