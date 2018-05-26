import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

import { RestApiService } from '../../services/rest-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private rest_api: RestApiService,
    private router: ActivatedRoute
  ) { }

  user: User;

  ngOnInit() {

    let user_id =this.router.snapshot.params['id'];

    this.rest_api.getSingleUser(user_id).subscribe(user => {
      this.user =user
    });

  }


  editUser(){

    this.rest_api.updateUser(this.user).subscribe(user => {
      console.log(user);
    });

  }

}
