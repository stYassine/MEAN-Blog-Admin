import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';


import { User } from '../models/user';
import { Article } from '../models/article';
import { Category } from '../models/category';
import { Comment } from '../models/comment';
import { Like } from '../models/like';



import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';



@Injectable()
export class RestApiService {

  constructor(
    private http: Http
  ) { }

  BASE_URL ="http://localhost:8080/";

  /// source
  private articlecreated =new Subject<Article>();
  private categorycreated =new Subject<Category>();
  private commentcreated =new Subject<Comment>();
  private usercreated =new Subject<User>();

  /// stream
  articleCreated$ =this.articlecreated.asObservable();
  categoryCreated$ =this.categorycreated.asObservable();
  commentCreated$ =this.commentcreated.asObservable();
  userCreated$ =this.usercreated.asObservable();

  
  /// handle errors
  handleErrors(response: Response): Observable<any>{
    let err_msg =`${response.status} - ${response.text}`;
    return Observable.throw(err_msg);
  }

  ///////////////////////////////////////////////////////
  /// Dashboard
  ///////////////////////////////////////////////////////
  getDashboardStatics(): Observable<any>{
    return this.http.get(this.BASE_URL+'dashboard')
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  ///////////////////////////////////////////////////////
  /// Users
  ///////////////////////////////////////////////////////

  /// get all users
  getUsers(): Observable<User[]>{
    return this.http.get(this.BASE_URL+`users`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// single user
  getSingleUser(user_id): Observable<User>{
    return this.http.get(this.BASE_URL+`users/${user_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// create user
  createUser(user: User): Observable<any>{
    return this.http.post(this.BASE_URL+`users`, user)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// update user
  updateUser(user: User): Observable<any>{
    return this.http.put(this.BASE_URL+`users/edit/${user._id}`, user)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// remove user
  removeUser(user_id): Observable<any>{
    return this.http.delete(this.BASE_URL+`users/remove/${user_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }


  ///////////////////////////////////////////////////////
  /// Articles
  ///////////////////////////////////////////////////////

  /// get all articles
  getArticles(): Observable<Article[]>{
    return this.http.get(this.BASE_URL+`articles`)
          .map(response => response.json())
          .do(response => console.log(response))
          .catch(this.handleErrors);
  }

  /// single article
  getSingleArticle(article_id): Observable<Article>{
    return this.http.get(this.BASE_URL+`articles/${article_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// create article
  createArticle(article: Article): Observable<any>{
    return this.http.post(this.BASE_URL+`articles`, article)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// update article
  updateArticle(article: Article): Observable<any>{
    return this.http.put(this.BASE_URL+`articles/edit/${article._id}`, article)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// remove article
  removeArticle(article_id): Observable<any>{
    return this.http.delete(this.BASE_URL+`articles/remove/${article_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  ///////////////////////////////////////////////////////
  /// Categories
  ///////////////////////////////////////////////////////

  /// get all categories
  getCategories(): Observable<Category[]>{
    return this.http.get(this.BASE_URL+`categories`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// single category
  getSingleCategory(category_id): Observable<Category>{
    return this.http.get(this.BASE_URL+`categories/${category_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// create category
  createCategory(category: Category): Observable<any>{
    return this.http.post(this.BASE_URL+`categories`, category)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// update category
  updateCategory(category: Category): Observable<any>{
    return this.http.put(this.BASE_URL+`categories/edit/${category._id}`, category)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// remove category
  removeCategory(category_id): Observable<any>{
    return this.http.delete(this.BASE_URL+`categories/remove/${category_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  ///////////////////////////////////////////////////////
  /// Comments
  ///////////////////////////////////////////////////////

  /// get all comments
  getComments(): Observable<Comment[]>{
    return this.http.get(this.BASE_URL+`comments`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// single comment
  getSingleComment(comment_id): Observable<Comment>{
    return this.http.get(this.BASE_URL+`comments/${comment_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// create comment
  createComment(comment: Comment): Observable<any>{
    return this.http.post(this.BASE_URL+`comments`, comment)
          .map(response => response.json())
          .catch(this.handleErrors);
  }
  
  /// update comment
  updateComment(comment: Comment): Observable<any>{
    return this.http.put(this.BASE_URL+`categories/edit/${comment._id}`, comment)
          .map(response => response.json())
          .catch(this.handleErrors);
  }

  /// remove comment
  removeComment(comment_id): Observable<any>{
    return this.http.delete(this.BASE_URL+`comments/remove/${comment_id}`)
          .map(response => response.json())
          .catch(this.handleErrors);
  }


  ///////////////////////////////////////////////////////
  /// Likes
  ///////////////////////////////////////////////////////

  /// get all likes

  /// single like
  
  /// create like
  
  /// update like

  /// remove like



} 
