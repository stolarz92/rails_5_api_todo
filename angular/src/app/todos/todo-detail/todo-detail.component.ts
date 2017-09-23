import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  id: number;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.todo = this.todoService.getTodo(this.id)
        }
      );
  }

  onEditTodo() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDeleteTodo() {
    this.todoService.deleteTodo(this.id);
    this.router.navigate(['/todos'])
  }

}
