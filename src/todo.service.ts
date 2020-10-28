import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./app/app.component";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private todos = [
    {
      userId: 1,
      id: 1,
      title: "Wee 1💛",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "Kaew 2❤️",
      completed: true
    },
    {
      userId: 1,
      id: 3,
      title: "Champoo 3💜",
      completed: false
    }
  ];
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    const url = "https://jsonplaceholder.typicode.com/todos?userId=1";
    return this.http.get<Todo[]>(url);
    // return this.todos;
  }
  // getTodoList1(): Todo[] {
  //   // const url = 'https://jsonplaceholder.typicode.com/todos?userId=1';
  //   // return this.http.get<Todo[]>(url);
  //   return this.todos;

  // }
  addTodoItem(item: Todo): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.post(url, item);
  }
}
