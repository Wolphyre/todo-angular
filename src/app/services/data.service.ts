import { Injectable } from '@angular/core';
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: TodoClass[];

  constructor(private apiServ: ApiService) {
    this.todos = TODOS;
  }

  getActiveTodos(): TodoClass[]{
    const tempTodos = [];
    for (const todo of this.todos) {
      if (todo.priority !== -1) {
        tempTodos.push(todo);
      }
    }
    return tempTodos;
  }

  getDoneTodos(): TodoClass[]{
    return this.todos.filter(todo => todo.priority === -1);
  }


}
