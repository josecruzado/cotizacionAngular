import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workforce-form',
  templateUrl: './workforce-form.component.html',
  styleUrls: ['./workforce-form.component.scss']
})
export class WorkforceFormComponent implements OnInit {


  public tabla:any={uno:'Descripción',dos:'Precio Costo',tres:'Precio Venta'};

  constructor() { }

  ngOnInit(): void {
  }

}
