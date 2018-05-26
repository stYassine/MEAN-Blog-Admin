import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { RestApiService } from '../../services/rest-api.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  users: User[];

  user_create_form_appear: Boolean =false;

  ngOnInit() {

    this.rest_api.getUsers().subscribe(users => {
      this.users =users;
    });

  }

}
