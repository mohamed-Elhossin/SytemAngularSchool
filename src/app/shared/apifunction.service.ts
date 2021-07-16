import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIFunctionService<T> {

  constructor( @Inject(String) private configURL : string, private http: HttpClient) { }

  get(): Observable<T> {
    return this.http.get<T>(this.configURL);
  }
  getById(id): Observable<T> {
    return this.http.get<T>(this.configURL+ `/${id}`);
  }
  post(model: T): Observable<T> {
    return this.http.post<T>(this.configURL, model)
  }

  put(model: T , id) {
  return this.http.put(this.configURL  + `/${id}`, model)
  }

  delete(id) : Observable<T>  {
    return this.http.delete<T>(this.configURL + `/${id}`)
  }

}
