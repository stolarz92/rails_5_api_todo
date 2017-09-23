import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { TodoRes } from '../TodoRes';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(
    private todoRes: TodoRes,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.todoRes.query().$observable.subscribe(res => {
          this.todos = res;
      });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
