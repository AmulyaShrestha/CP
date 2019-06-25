import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {User} from '../../Model/User';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationForm: FormGroup;

  constructor(private formBuiulder: FormBuilder,
              private authService: AuthService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.registrationForm = this.formBuiulder.group({
      email: [undefined],
      password: [undefined],
      fullName: [undefined],
      username: [undefined],
      age: [undefined]
    })
  }

  onRegister() {
    this.spinner.show();
    this.user.fullname = this.registrationForm.get('fullName').value;
    this.user.email = this.registrationForm.get('email').value;
    this.user.password = this.registrationForm.get('password').value;
    this.user.username = this.registrationForm.get('username').value;
    this.user.age = this.registrationForm.get('age').value;
    this.authService.signUpUser(this.user);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
