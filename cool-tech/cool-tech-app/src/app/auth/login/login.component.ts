import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {


    this.authService.login$(this.loginForm.value).subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response['user']));
        this.router.navigate(['/auth/profile']);
      });

  }

}
