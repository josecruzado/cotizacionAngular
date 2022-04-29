import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuotationComponent } from './table-quotation.component';

describe('TableQuotationComponent', () => {
  let component: TableQuotationComponent;
  let fixture: ComponentFixture<TableQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
