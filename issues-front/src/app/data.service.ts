import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8000/users')
  }

  getIssues() {
    return this.http.get('http://localhost:8000/issues')
  }

  getIssue(id) {
    return this.http.get(`http://localhost:8000/issues/${id}`)
  }


}
