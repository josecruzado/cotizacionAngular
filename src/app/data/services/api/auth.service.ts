import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //constUrl="http://localhost:8080/api/login";

  constructor(private http:HttpClient) { }


  public getToken():string {
    return localStorage.getItem('token');
  }

  login(model:any){
    return this.http.post('/api/login',model).pipe(
      map((response:any)=>{
        const data=response;
        if(data.user.enabled){
          localStorage.setItem('token',data.token);
        }
      })
    )
  }
  logout(){
    localStorage.removeItem('token');
  }
  
}
