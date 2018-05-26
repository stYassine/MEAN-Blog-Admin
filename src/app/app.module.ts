import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//////////////
/// Built in modules
//////////////
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



//////////////
/// Components
//////////////
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



//////////////
/// Services
//////////////
import { RestApiService } from './services/rest-api.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/create-categories/create-categories.component';
import { EditCategoriesComponent } from './components/edit-categories/edit-categories.component';


//////////////
/// Routes
//////////////
const routes: Routes =[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: 'create', component: CreateUserComponent },
    { path: 'edit:id', component: EditUserComponent }
  ] },
  { path: 'articles', component: ArticlesComponent, children: [
    { path: 'create', component: CreateArticleComponent },
    { path: 'edit:id', component: EditArticleComponent }
  ] },
  { path: 'comments', component: CommentsComponent, children: [
    { path: 'create', component: CreateCommentComponent },
    { path: 'edit:id', component: EditCommentComponent }
  ] },
  { path: 'categories', component: CategoriesComponent, children: [
    { path: 'create', component: CreateCategoriesComponent },
    { path: 'edit:id', component: EditCategoriesComponent }
  ] },
  { path: '**', component: DashboardComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    ArticlesComponent,
    CreateArticleComponent,
    EditArticleComponent,
    CommentsComponent,
    CreateCommentComponent,
    EditCommentComponent,
    DashboardComponent,
    CategoriesComponent,
    CreateCategoriesComponent,
    EditCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
