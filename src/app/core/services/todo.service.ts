import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import { IUser } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ITodo[] = [];
  constructor(private http: HttpClient) {}

  getAllTodo(status: string): Observable<ITodo[]> {
    let queryString = "";
    if(status !== ''){
      queryString = `status=${status}`;
    }
    return this.http.get<ITodo[]>(
      `${apiEndpoint.TodoEndpoint.getAllTodo}?${queryString}`
    );
  }

  addTodo(data: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(
      `${apiEndpoint.TodoEndpoint.addTodo}`,
      data
    );
  }

  updateTodo(id: string, data: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(
      `${apiEndpoint.TodoEndpoint.updateTodo}/${id}`,
      data
    );
  }
}
