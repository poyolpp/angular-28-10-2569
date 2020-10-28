import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newTodo = "";

  name = "BNK 48 & CGM 48";
  todos: Todo[] = [];

  constructor(private service: TodoService) {}
  ngOnInit(): void {
    // this.todos = this.service.getTodoList1();
    this.service.getTodoList().subscribe(todoList => {
      console.log(todoList);
      this.todos = todoList;
    });
  }
  addNewItem(): void {
    const todoItem: Todo = {
      userId: 1,
      title: this.newTodo,
      completed: false
    };
    this.service.addTodoItem(todoItem).subscribe(() => {
      alert("Add todo successfully");
      this.newTodo = "";
    });
  }
}

// count = 0;

//   increment() {
//     this.count++;
//   }
//   decrement() {
//     if (this.count > 0) {
//       this.count--;
//     }
//   }
// }
export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}
