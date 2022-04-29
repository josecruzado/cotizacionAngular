import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Cliente } from '@data/interfaces/ui/icliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService{

  constructor(private http: HttpClient,private auth_token:AuthService){}
  

  getClients(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get('/api/clientes', { headers: headers })
  }

  deleteClient(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.delete(`/api/clientes/eliminar/${id}`,{ headers: headers });  
  }  

  createClient(client: Cliente): Observable<object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post('/api/clientes/crear',client,{ headers: headers });  
  }
  
}
