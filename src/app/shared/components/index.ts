import { TitleH1Component } from "./titles/title-h1/title-h1.component";
import { TableComponent } from './tables/table/table.component';
import { TableQuotationComponent } from "./tables/table-quotation/table-quotation.component";
import { TableScrollComponent } from "./tables/table-scroll/table-scroll.component";


export const components: any[] = [
    TitleH1Component,
    TableComponent,
    TableQuotationComponent,
    TableScrollComponent
];

//export all components

export * from './titles/title-h1/title-h1.component';
export * from './tables/table/table.component';
export * from './tables/table-quotation/table-quotation.component';
export * from './tables/table-scroll/table-scroll.component';