import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html; charset=UTF-8'
    })
  };

  getAll(endPoint: any) {
    return this.http.get(`${this.baseUrl}/${endPoint}`)
  }

  getAllWithId(endPoint: any, id: any) {
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`)
  }

  getById(endPoint: any, id: any) {
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`)
  }

  delete(endPoint: any, id: any) {
    return this.http.delete(`${this.baseUrl}/${endPoint}/${id}`)
  }

  save(endPoint: any, object: any) {
    return this.http.post(`${this.baseUrl}/${endPoint}`, object)
  }

  save2(endPoint: any, object: any) {
    return this.http.post<String>(`${this.baseUrl}/${endPoint}`, object, this.httpOptions)
  }

  update(endPoint: any, id, object: any) {
    return this.http.put(`${this.baseUrl}/${endPoint}/${id}`, object)
  }

  update2EndPoint(endPoint1: any, endPoint2: any, id, object: any) {
    return this.http.put(`${this.baseUrl}/${endPoint1}/${id}/${endPoint2}`, object)
  }

  updateWithoutId(endPoint: any, object: any) {
    return this.http.put(`${this.baseUrl}/${endPoint}`, object)
  }

}
