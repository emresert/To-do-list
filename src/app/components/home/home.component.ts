import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  data = [];

  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit() {
    this.getAllTodos();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  addTodo(todo){
    const obj={todo:todo.value};
    this.todoService.addTodo(obj).subscribe((res)=>{
      console.log(res);
    this.getAllTodos();
    },(err)=>{console.log(err);});
  }

  getAllTodos(){
    this.todoService.getAllTodos()
    .subscribe((res)=>{
      Object.keys(res).forEach((key)=>{
        this.data[key]=res[key];
      });
    },(err)=>{
      console.log(err);
    });
  }

}
