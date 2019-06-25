import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [undefined],
      password: [undefined]
    })
  }

  onLogin() {
    this.spinner.show();
    this.authService.logInUser(this.loginForm.get('email').value, this.loginForm.get('password').value);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  logout() {
    this.authService.signOut();
  }

}
