import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';

import { Article } from '../../models/article';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    public rest_api: RestApiService
  ) { }

  articles: Article[];

  ngOnInit() {

    this.rest_api.getArticles().subscribe(articles => {
      this.articles =articles;
    });

  }

  deleteArticle(article_id){
    
    this.rest_api.removeArticle(article_id).subscribe(response => {
      console.log(response);
    });
    
  }

}
