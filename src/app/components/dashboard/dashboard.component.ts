import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { Article } from '../../models/article';
import { Category } from '../../models/category';
import { Comment } from '../../models/comment';

import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  users_number: Number;
  articles_number: Number;
  comments_number: Number;
  categories_number: Number;

  ngOnInit() {

    this.rest_api.getDashboardStatics().subscribe(response => {
      this.users_number =response.users;
      this.articles_number =response.articles;
      this.comments_number =response.comments;
      this.categories_number =response.categories;
    });

  }

}
