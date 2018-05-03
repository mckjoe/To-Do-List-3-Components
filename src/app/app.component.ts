import { Component } from '@angular/core';
import { Task } from './models/task.model';
@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = "Angular Homework";
  currentTime = new Date();
  month: number = this.currentTime.getDate();
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular Homework for Epicodus course', 2),
    new Task('Begin brainstorming possible JavaScript group projects', 1),
    new Task('Add README file to last few Angular repos on GitHub', 3)
    ];

    addTask(newTask: Task) {
      this.masterTaskList.push(newTask);
    }

    editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }

    finishedEditing() {
      this.selectedTask = null;
    }
  }
