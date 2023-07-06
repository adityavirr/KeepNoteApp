import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register_url: string = "http://localhost:3000/users"
 
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.register_url,user);
  }
}
