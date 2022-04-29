import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {



  public tabla:any={uno:'Nombre',dos:'Capacidad',tres:'Categoria',cuatro:'Precio Costo',cinco:'Precio Venta'};

  constructor() { }

  ngOnInit(): void {
  }

}
