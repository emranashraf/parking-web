import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: `
    <div id="logout" class="btn-header transparent pull-right">
      <span><a href=''><i class="fa fa-sign-out"></i></a></span>
    </div>
  `,
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
