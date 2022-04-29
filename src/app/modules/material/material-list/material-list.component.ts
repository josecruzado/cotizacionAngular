import { Component, OnInit } from '@angular/core';
import { IMaterialList } from '@data/interfaces/ui/imaterial-list';
import { MaterialService } from '@data/services/api/material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  public title={type: 'primary', text:'Lista de Materiales'};

  public pagina:any={nombre:'Lista de Materiales'};


  gridData:any[];

  isEdit:boolean;

  colData=[
    {field:'nombre',header:'Nombre'},
    {field:'categoria',header:'Categoria'},
    {field:'capacidad',header:'Capacidad'},
    {field:'precioCosto',header:'Precio Costo'},
    {field:'precioVenta',header:'Precio Venta'}
  ];

  public materials: IMaterialList[];

  constructor(private materialService:MaterialService) { 
    this.materialService.getConfig().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  ngOnInit():void{
    this.loadGrid();
  }

  loadGrid(){
    //this.userservice.getUser().suscribe((data:any[])=>{this.gridData=data;});
    //let token=localStorage.getItem("token");
    this.materialService.getConfig().subscribe((data:any) => {
      this.gridData=data;
    });
  }
}
