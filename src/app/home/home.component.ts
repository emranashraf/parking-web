import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoginAction, User } from 'parking-core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<any>) {
    this.loggedIn$ = this.store.select(s => s.auth.loggedIn);
    this.user$ = this.store.select(s => s.auth.user);
  }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction({ username: 'test', password: 'test' }));
  }
}
