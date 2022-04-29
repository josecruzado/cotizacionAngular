import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit {


  gridData:any[];

  isEdit:boolean;

  colData=[
    {field:'nombre',header:'Nombre'},
    {field:'categoria',header:'Categoria'},
    {field:'modelo',header:'Modelo'},
    {field:'capacidad',header:'Capacidad'},
    {field:'marca',header:'Marca'},
    {field:'precioCosto',header:'Precio Costo'},
    {field:'precioVenta',header:'Precio Venta'}
  ];


  constructor() { }

  ngOnInit(): void {
  //this.loadGrid();
  }

  /* loadGrid(){
    //this.userservice.getUser().suscribe((data:any[])=>{this.gridData=data;});
    //let token=localStorage.getItem("token");
    this.productService.getConfig().subscribe((data:any) => {
      this.gridData=data;
    });
  } */

}
