import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _title = "Todos";
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
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
  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: '',
      
    });
    
    
    this.todoTitle = '';
    this.todoId++;
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getTodos(){
    return this.todoList;
  }
  constructor() { }
}
