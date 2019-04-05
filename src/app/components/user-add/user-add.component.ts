import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]]
    });
  }

  return() {
    this.router.navigate(['/user']);
  }

  clear() {
    this.form.reset();
  }

  get name() {
    return this.form.get('name');
  }

  get user() {
    return this.form.get('user');
  }

  get email() {
    return this.form.get('email');
  }
}
