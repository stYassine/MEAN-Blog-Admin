import { Component, OnInit } from '@angular/core';

import { Comment } from '../../models/comment';

import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  comments: Comment[];

  ngOnInit() {

    this.rest_api.getComments().subscribe(comments => {
      this.comments =comments;
    });

  }


  deleteComment(comment_id){
    
    this.rest_api.removeComment(comment_id).subscribe(response => {
      console.log(response);
    });
    
  }

}
