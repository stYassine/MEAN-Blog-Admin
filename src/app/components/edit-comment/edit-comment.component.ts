import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  ngOnInit() {
    
  }

  editComment(){

  }

}
