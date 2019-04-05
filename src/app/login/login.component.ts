import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/request/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest;
  form: FormGroup;

  constructor(
    private session: SessionService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    if (this.auth.isAuthenticated) { this.router.navigate(['/main']); }
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]]
    });
  }

  login() {
    this.loginRequest = new LoginRequest();
    this.loginRequest.user = this.user.value;
    this.loginRequest.password = this.password.value;
    console.log('Usuario: ' + this.loginRequest.user + ' Password: ' + this.loginRequest.password);
    const res = {
      token: '1234567890QWERTYUIOP',
      usuario: 'admin',
      email: 'admin@frontex.com'
    };
    this.session.setUser(res);
    this.router.navigate(['/main']);
  }

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }
}
