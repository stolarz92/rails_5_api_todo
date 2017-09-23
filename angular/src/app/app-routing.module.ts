import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { TodosComponent } from './todos/todos.component';
import { TodoStartComponent } from './todos/todo-start/todo-start.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      { path: '', component: TodoStartComponent },
      { path: 'new', component: TodoEditComponent },
      { path: ':id', component: TodoDetailComponent },
      { path: ':id/edit', component: TodoEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
