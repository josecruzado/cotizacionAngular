import { Component, Input, OnInit } from '@angular/core';
import { Cotizacion } from '@data/interfaces/ui/icotizacion';

@Component({
  selector: 'app-table-quotation',
  templateUrl: './table-quotation.component.html',
  styleUrls: ['./table-quotation.component.scss']
})
export class TableQuotationComponent implements OnInit {


  @Input() Cotizaciones: Cotizacion[];
  @Input() ColData:any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
