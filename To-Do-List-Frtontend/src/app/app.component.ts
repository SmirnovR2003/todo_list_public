import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './app.servise';

export interface Task{
  id: number,
  name: string,
  isDone: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  tasks: Array<Task> = []

  completedTasks: Array<Task> = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(x => this.tasks = x)
  }

  taskId : number = 2
  addTask(myForm: NgForm): void{
    this.tasks.push({
      id: this.taskId,
      name: myForm.value.task,
      isDone: false});
    this.taskId++;  
  }

  onDelete(id: number): void{
    this.tasks = this.tasks.filter(task => task.id != id)
  }

  onDeleteCompletedTask(id: number): void{
    this.completedTasks = this.completedTasks.filter(task => task.id != id)
  }

  onComplete(id: number): void{
    let completedIndex = this.tasks.findIndex(task => task.id == id); 
    this.tasks[completedIndex].isDone = true;
    this.completedTasks.push(this.tasks[completedIndex]);
    this.tasks = this.tasks.filter(task => task.id != id);
  }

}
