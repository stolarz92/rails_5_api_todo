import { Todo } from './todo.model';
import { Item } from '../shared/item.model';
import {Subject} from 'rxjs/Subject';

export class TodoService {
  todosChanged = new Subject<Todo[]>();

  private todos: Todo[] = [
    new Todo('Test Title', [
      new Item('Item 1', true)
      ]
    ),
    new Todo('Another Test Title', [
      new Item('Item 2', false)
    ]),
  ];

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index: number) {
    return this.todos[index];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  updateTodo(index: number, newTodo: Todo) {
    this.todos[index] = newTodo;
    this.todosChanged.next(this.todos.slice());
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice())
  }
}

