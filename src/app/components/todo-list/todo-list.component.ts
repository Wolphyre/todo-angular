import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit, OnDestroy {

  // @Input() todos: TodoClass[];

  todosArray: TodoClass[] = [];

  // @Input() set todos(value: TodoClass[]){
  //   this.todosArray = value;
  //   this.orderByPriority()
  // }

  constructor(private dataServ: DataService, private apiServ: ApiService) {
    dataServ.getActiveTodos().subscribe({
      next: todos => this.todosArray = todos,
      error: err => console.log(err)
    });
  }

  refreshArray(){
    // this.todosArray = this.dataServ.getActiveTodos();
  }

  ngOnInit(): void {
    // this.orderByPriority()
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  manageTodoEmission(todo: TodoClass){
    this.dataServ.refreshTodos()
  }

  orderByName(){
    // this.todos.sort((a: TodoClass, b:TodoClass) => {
    //   // if (a.name < b.name) {
    //   //   return -1;
    //   // }
    //   // if (a.name > b.name) {
    //   //   return 1;
    //   // }
    //   // return 0;
    //   return a.name.localeCompare(b.name);
    // });

    // this.todos.sort(TodoClass.compareByName);
    this.todosArray.sort(TodoClass.compareByName);
  }

  orderByDate(){
    // this.todos.sort((a, b) => {
    //   if (a.creationDate < b.creationDate) {
    //     return -1;
    //   }
    //   if (a.creationDate > b.creationDate) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // this.todos.sort(TodoClass.compareByDate);
    this.todosArray.sort(TodoClass.compareByDate);
  }

  orderByPriority(){
    // this.todos.sort(TodoClass.compareByPriority)
    this.todosArray.sort(TodoClass.compareByPriority)
  }



}

// <function ciao(text: string) {
//   return 'ciao ' + text;
// }

// const ciao2 = function(text: string){
//   return 'ciao' + text;
// }

// const ciao3 = (text: string) => 'ciao'+ text;>
