import { Component, OnInit } from '@angular/core';
import { OtherService } from '@data/services/api/other.service';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.scss']
})
export class OtherListComponent implements OnInit {

  public title={type: 'primary', text:'Lista Otros'};

  public pagina:any={nombre:'Lista Otros'};


  gridData:any[];

  isEdit:boolean;

  colData=[
    {field:'descripcion',header:'Descripcion'},
    {field:'precioCosto',header:'Precio Costo'},
    {field:'precioVenta',header:'Precio Venta'}
  ];

  //public materials: IMaterialList[];

  constructor(private otherService:OtherService) { 
    this.otherService.getConfig().subscribe(
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
    this.otherService.getConfig().subscribe((data:any) => {
      this.gridData=data;
    });
  }

}
