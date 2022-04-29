import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-form',
  templateUrl: './other-form.component.html',
  styleUrls: ['./other-form.component.scss']
})
export class OtherFormComponent implements OnInit {


  public tabla:any={uno:'Descripción',dos:'Precio Costo',tres:'Precio Venta'};

  constructor() { }

  ngOnInit(): void {
  }

}
