import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
        // Retrieve stored credentials for admin
        if (this.loginObj.userName === 'admin' && this.loginObj.password === '334455') {
          this.router.navigateByUrl('/home');
          return;
        }
        const userCredentials = localStorage.getItem('userCredentials');
    


    if (userCredentials) {
      const { userName: userName, password: userPassword } = JSON.parse(userCredentials);

      // Check if the credentials match user credentials
      if (this.loginObj.userName === userName && this.loginObj.password === userPassword) {
        this.router.navigateByUrl('/home');
        return; // Exit the function after redirecting
      }
    }

    // If no match is found
    alert('Wrong credentials');
  }
}
