import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoginAction, User } from 'parking-core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  loginForm: FormGroup;
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<any>,
              private fb: FormBuilder) {

    this.loggedIn$ = this.store.select(s => s.auth.loggedIn);
    this.user$ = this.store.select(s => s.auth.user);

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.store.dispatch(new LoginAction({ email: 'test', password: 'test' }));
  }
}
