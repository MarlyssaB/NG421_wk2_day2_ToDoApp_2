import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "Todos";
  todoId: number = 0;
  todoList: ITodo [] = [];
  todoTitle: string;
  
  ngOnInit() {
    this.todoId = 0;
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { id: 1, title: 'Install Angular CLI', description: 'and curse several times while you do it' },
    
    ];

}
}