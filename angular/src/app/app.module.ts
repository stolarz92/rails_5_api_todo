import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Angular2TokenService } from 'angular2-token';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TodoService } from './todos/todo.service';
import { TodoStartComponent } from './todos/todo-start/todo-start.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {ResourceModule} from "ngx-resource";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDetailComponent,
    DropdownDirective,
    TodoStartComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    ResourceModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],

  providers: [Angular2TokenService,
              AuthService,
              AuthGuard,
              TodoService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
