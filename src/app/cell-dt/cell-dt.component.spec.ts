import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDtComponent } from './cell-dt.component';

describe('CellDtComponent', () => {
  let component: CellDtComponent;
  let fixture: ComponentFixture<CellDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellDtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
