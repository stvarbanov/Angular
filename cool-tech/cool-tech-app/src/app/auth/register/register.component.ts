import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CreateUserDto } from 'src/app/services/user.service.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {


  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

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

    this.authService.register$(body).subscribe((response) => {
      localStorage.setItem('user', JSON.stringify(response.user));
      this.router.navigate(['/auth/profile']);
    })

  }

}
