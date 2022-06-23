import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoClass, TodoPriority } from '../model/todo-class';




@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private readonly BASE_URL = 'https://628b2f12667aea3a3e290de6.mockapi.io/todos'


  constructor(private http: HttpClient) {
  }


  getTodosFromDb(){
    return this.http.get<TodoClass[]>(this.BASE_URL).pipe(
      map(dbObjects => this.convertToTodoClass(dbObjects)),
      // map(todos => this.makeVeryHigh(todos))
    );
  }


  deleteTodo(id: string): Observable<any>{


    const url = this.BASE_URL + '/' + id;


    return this.http.delete<any>(url)
  }


  putTodo(todo: TodoClass): Observable<TodoClass>{


    const url = this.BASE_URL + '/' + todo.id;


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


    return this.http.put<TodoClass>(url, TodoClass.toDbObj(todo), httpOptions)
  }


  postTodo(todo: TodoClass): Observable<TodoClass>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<TodoClass>(this.BASE_URL, TodoClass.toDbObj(todo), httpOptions).pipe(
      map(todoObj => TodoClass.fromDbObj(todoObj))
    )


  }


  // makeVeryHigh(todos: TodoClass[]){
  //   const newArray = [];
  //   for (const todo of todos) {
  //     todo.priority = TodoPriority.VERYHIGH;
  //     newArray.push(todo);
  //   }
  //   return newArray;
  // }


  convertToTodoClass(dbObjectArray: any[]) {
    const todoArray = [];
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject);
      todoArray.push(newTodo);
    }
    return todoArray;
  }


  // fetchData(){
  //   return fetch('https://628b2f12667aea3a3e290de6.mockapi.io/todos');
  // }
}