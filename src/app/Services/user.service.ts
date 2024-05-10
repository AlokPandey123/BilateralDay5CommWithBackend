import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://jsonplaceholder.typicode.com/users";
  url2="http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>(this.url);
  }

  postData(data:any){
     return this.http.post<any>(this.url2,data);
  }
}
