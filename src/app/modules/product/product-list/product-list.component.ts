import { Component, OnInit } from '@angular/core';
import { IProductList } from '@data/interfaces/ui/iproduct-list';
import { ProductService } from '@data/services/api/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public title={type: 'primary', text:'Lista de Productos'};

  public pagina:any={nombre:'Lista de Productos'};


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

  public products: IProductList[];

  constructor(private productService:ProductService) { 
    this.productService.getConfig().subscribe(
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
    this.productService.getConfig().subscribe((data:any) => {
      this.gridData=data;
    });
  }
}
