import { Component, OnInit } from '@angular/core';
import { Cotizacion } from '@data/interfaces/ui/icotizacion';
import { QuotationService } from '@data/services/api/quotation.service';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.scss']
})
export class QuotationListComponent implements OnInit {

  public title={type: 'primary', text:'Lista de Productos'};

  public pagina:any={nombre:'Lista de Productos'};


  cotizaciones:Cotizacion[];

  isEdit:boolean;


  colData=[
    {header:'Cliente'},
    {header:'Sub Total'},
    {header:'Total Igv'},
    {header:'Fecha'}
  ];

  //public products: IProductList[];

  constructor(private quotationService:QuotationService) { 
    this.quotationService.getConfig().subscribe(
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
    this.quotationService.getConfig().subscribe((data:any[])=>{
      this.cotizaciones=data;
    });
  }

}
