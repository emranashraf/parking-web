import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction, User } from 'parking-core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<any>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.loggedIn$ = this.store.select(s => s.auth.loggedIn);
    this.user$ = this.store.select(s => s.auth.user);

    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    const formModel = this.loginForm.value;
    this.store.dispatch(new LoginAction({ email: formModel.login, password: formModel.password }));
  }
}
