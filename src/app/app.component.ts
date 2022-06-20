import { Component, OnInit } from '@angular/core';
import { TodoClass, TodoPriority } from './model/todo-class';
import { fromPriorityToColor, fromPriorityToDescr, TodoInterface } from './model/todo-interface';
import { TODOS, TODOS2, TODOS_I } from './model/todos-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'todo-angular';
  // todosArray: TodoClass[];

  constructor(){
    // this.todosArray = TODOS;

    // const pippo = {name: 'ciao', surname: 'ciao', min: 4}

    // const min = this.getMinValue(pippo, 4);

    // console.log(min);
  }



  ngOnInit(): void {
    // const nuoviTodos: TodoClass[] = [];

    // const todo1 = new TodoClass('interrogare paolo')

    // nuoviTodos.push(todo1);

    // console.log(nuoviTodos);
  }

  // toLuxuryMode(){
  //   this.todosArray = TODOS2;
  // }

  // getCorrectDate(timestamp: number): Date{
  //   const milliseconds = timestamp * 1000;
  //   return new Date(milliseconds);
  // }

  // getDescription(priority: TodoPriority){
  //   return fromPriorityToDescr(priority)
  // }

  // getColor(priority: TodoPriority) {
  //   return fromPriorityToColor(priority)
  // }

  // getMinValue(obj: hasMin, defaultMin: number){
  //   const minOfObject = obj.min;
  //   return minOfObject < defaultMin ? minOfObject : defaultMin;
  // }


}

// export interface hasMin{
//   min: number;
// }
