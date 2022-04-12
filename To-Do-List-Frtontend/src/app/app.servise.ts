import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./app.component";


@Injectable()
export class TaskService {
    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>("http://localhost:4200/rest/Todo/get-all");
    }

    getTask(taskId: number): Observable<Task> {
        return this.http.get<Task>(`http://localhost:4200/rest/Todo/${taskId}`);
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>("http://localhost:4200/rest/Todo/create", task);
    }

    completeTask(taskId: number): Observable<Task> {
        return this.http.put<Task>(`http://localhost:4200/rest/Todo/${taskId}/complete`, null);
    }

    deleteTask(taskId: number): Observable<any> {
        return this.http.delete(`http://localhost:4200/rest/Todo/${taskId}/delete`)
    }
}