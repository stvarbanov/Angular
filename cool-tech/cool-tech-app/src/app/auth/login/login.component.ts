import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {


    this.authService.login$(this.loginForm.value).subscribe({

      error: error => {
        const err = error as HttpErrorResponse;
        const msg = err.error.message.errors;

        // const arr: any = [];
        // console.log(msg);
        // Object.keys(msg).map(function (key, index) {
        //   arr.push(msg[key]['message']);
        // });

        this.notify.show(msg, 'error');
      },

      next: response => {


        localStorage.setItem('user', JSON.stringify(response['user']));
        this.router.navigate(['/auth/profile']).then(
          () => {
            window.location.reload();
          })

      }
    });
  }


}
