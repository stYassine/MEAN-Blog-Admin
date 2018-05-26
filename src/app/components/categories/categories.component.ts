import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';

import { Category } from '../../models/category';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  categories: Category[];

  ngOnInit() {

    this.rest_api.getCategories().subscribe(categories => {
      this.categories =categories;
    });

  }

  deleteCategory(category_id){
    
    this.rest_api.removeCategory(category_id).subscribe(response => {
      console.log(response);
    });
    
  }
  
  
}
