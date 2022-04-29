import { Component, OnInit } from '@angular/core';
import { Cliente } from '@data/interfaces/ui/icliente';
import { ClientService } from '@data/services/api/client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  public tabla:any={uno:'Ruc',dos:'Razon Social',tres:'Número',cuatro:'Dirección',cinco:'Rubro'};

  submitted = false;
  
  cliente:Cliente;

  constructor(private clientService:ClientService) { 
    this.cliente=new Cliente();
  }

  ngOnInit(): void {
    
  }

  create():void{
    this.clientService.createClient(this.cliente)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
          Swal.fire(
            'Bien hecho!',
            'Se agregó el cliente!',
            'success'
          )
        },
        error=>console.log(error));
  }

}
