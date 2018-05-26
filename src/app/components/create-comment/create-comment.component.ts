import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';

import { Comment } from '../../models/comment';
import { User } from '../../models/user';
import { Article } from '../../models/article';


@Component({
  selector: 'create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  users: User[];
  articles: Article[];

  ngOnInit() {
    
    this.rest_api.getUsers().subscribe(users => {
      this.users =users;
    });

    this.rest_api.getArticles().subscribe(articles => {
      this.articles =articles;
    });
    
  }


  createComment(comment){
    this.rest_api.createComment(comment).subscribe(response => {
      console.log(response);
    });
  }

}
