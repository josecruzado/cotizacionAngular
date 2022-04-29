import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IClientList } from '@data/interfaces/ui/iclient-list';
import { ClientService } from '@data/services/api/client.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public title={type: 'primary', text:'Lista de Clientes'};

  public pagina:any={nombre:'Lista de Clientes'};

  gridData:any[];

  isEdit:boolean;

  deleteMessage=false;  

  colData=[
    {field:'razonSocial',header:'Razón Social'},
    {field:'ruc',header:'Ruc'},
    {field:'numero',header:'Número'},
    {field:'direccion',header:'Dirección'},
    {field:'rubro',header:'Rubro'}
  ];

  public clients: IClientList[];

  constructor(private clientService:ClientService) { 
    this.clientService.getClients().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  ngOnInit():void{
    this.loadGrid();
  }

  loadGrid(){
    this.clientService.getClients().subscribe((data:any) => {
      this.gridData=data;
    });
  }

  delete=(id: string): void => this.deleteClient(id);

  deleteClient(id: string) {
    Swal.fire({
      title: 'Estas seguro ?',
      text: "No podrás deshacer esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
      this.clientService.deleteClient(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.clientService.getClients().subscribe(data =>{  
            this.gridData=data  
            })  
        },  
        error => console.log(error));
        Swal.fire(
          'Eliminado!',
          'El cliente ha sido eliminado',
          'success'
        )
      }
    })
  }
  
}
