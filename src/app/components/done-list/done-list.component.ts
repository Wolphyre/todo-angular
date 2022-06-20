import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  todosArray: TodoClass[];

  constructor(private dataServ: DataService) {
    this.todosArray = dataServ.getDoneTodos();
  }

  ngOnInit(): void {
  }

  refreshArray(){
    this.todosArray = this.dataServ.getDoneTodos();
  }

  manageTodoEmission(todo: TodoClass) {
    console.log('list-componet', todo.name)
    this.orderByPriority();
  }

  orderByName() {
    this.todosArray.sort(TodoClass.compareByName);
  }

  orderByDate() {
    this.todosArray.sort(TodoClass.compareByDate);
  }

  orderByPriority() {
    this.todosArray.sort(TodoClass.compareByPriority)
  }
}
