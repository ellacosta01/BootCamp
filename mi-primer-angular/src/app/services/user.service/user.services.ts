import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http: HttpClient) {}

  /**
  Funcion para traer el listado de usuarios
   */
  getUser() {
    return this.http.get<any[]>('users.json')
    //return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
