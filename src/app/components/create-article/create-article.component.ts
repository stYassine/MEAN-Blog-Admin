import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';

import { Article } from '../../models/article';

@Component({
  selector: 'create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(
    public rest_api: RestApiService
  ) { }

  article: Article;

  ngOnInit() {
  }

  createArticle(article: Article){
    console.log(article);
    // this.rest_api.createArticle(this.article).subscribe(response => {
    //   console.log(response);
    // });
  }

}
