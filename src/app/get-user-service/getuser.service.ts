import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userListType } from '../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUserData(): Observable<userListType[]>{
    return this.http.get<userListType[]>(this.apiUrl)
  }
}
