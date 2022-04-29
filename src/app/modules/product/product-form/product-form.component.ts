import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


  public tabla:any={uno:'Nombre',dos:'Marca',tres:'Modelo',cuatro:'Capacidad',cinco:'Categoria',seis:'Precio Costo',siete:'Precio Venta'};


  constructor() { }

  ngOnInit(): void {
  }

}
