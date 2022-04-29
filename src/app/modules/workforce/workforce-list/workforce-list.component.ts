import { Component, OnInit } from '@angular/core';
import { WorkforceService } from '@data/services/api/workforce.service';

@Component({
  selector: 'app-workforce-list',
  templateUrl: './workforce-list.component.html',
  styleUrls: ['./workforce-list.component.scss']
})
export class WorkforceListComponent implements OnInit {

  public title={type: 'primary', text:'Lista de Mano de Obra'};

  public pagina:any={nombre:'Lista de Mano de Obra'};


  gridData:any[];

  isEdit:boolean;

  colData=[
    {field:'descripcion',header:'Descripción'},
    {field:'precioCosto',header:'Precio Costo'},
    {field:'precioVenta',header:'Precio Venta'}
  ];

  //public products: IProductList[];

  constructor(private workforceService:WorkforceService) { 
    this.workforceService.getConfig().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
  ngOnInit(): void {
    this.loadGrid();
  }


  loadGrid(){
    //this.userservice.getUser().suscribe((data:any[])=>{this.gridData=data;});
    //let token=localStorage.getItem("token");
    this.workforceService.getConfig().subscribe((data:any) => {
      this.gridData=data;
    });
  }
}
