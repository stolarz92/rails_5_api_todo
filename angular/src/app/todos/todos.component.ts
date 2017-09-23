import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
