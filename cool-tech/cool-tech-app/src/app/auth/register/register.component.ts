import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { CreateUserDto } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {


  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(private authService: AuthService,
    private router: Router,
    private notify: NotifyService) { }

  ngOnInit(): void {

  
  }
  ngAfterViewInit(): void {

  }
  onSubmit() {

    const { username, email, password, rePassword, phone } = this.registerForm.value;

    const body: CreateUserDto = {
      username: username,
      email: email,
      password: password,
      rePassword: rePassword,
      phone: phone
    }

    this.authService.register$(body).subscribe({
      error: error => {
        const err = error as HttpErrorResponse;
        const msg = err.error.message.errors;
        const arr: any = [];


        Object.keys(msg).map(function (key, index) {
          arr.push(msg[key]['message']);
        });


        this.notify.show(arr, 'error');
      },
      next: response => {
        localStorage.setItem('user', JSON.stringify(response.user));
        this.registerForm.reset();
        this.router.navigate(['/auth/profile']);
      }
    })

  }

}
