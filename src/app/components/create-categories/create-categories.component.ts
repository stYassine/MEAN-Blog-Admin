import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  ngOnInit() {
  }

  createCategory(){
    
  }

}
