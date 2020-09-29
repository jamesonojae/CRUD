import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

// url to be used to connect to the app
// const baseUrl = 'http://localhost:8080/api/v1/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  // injecting the http client
  private baseUrl = 'http://localhost:8080/api/v1/tutorials';
  constructor(private http: HttpClient) { }
  // get all
  getAll(path): Observable<any> {
    return this.http.get(`${this.baseUrl}/${path}`);
  }
  // get a tutorial
  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // create a tutorial
  create(path, data): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, data);
  }
  // update a tutorail
  update(id, data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  // delete a tutorial
  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  // delete all tutorial
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
