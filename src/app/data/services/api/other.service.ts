import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private http: HttpClient,private auth_token:AuthService){}
  
  /* getConfig() {
    return this.http.get('/api/clientes');
  } */

  getConfig(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get('/api/otros', { headers: headers })
  }
}
