import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-scroll',
  templateUrl: './table-scroll.component.html',
  styleUrls: ['./table-scroll.component.scss']
})
export class TableScrollComponent implements OnInit {


  @Input() GridData: any;
  @Input() ColData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
