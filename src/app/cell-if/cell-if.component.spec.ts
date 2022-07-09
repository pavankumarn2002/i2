import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellIfComponent } from './cell-if.component';

describe('CellIfComponent', () => {
  let component: CellIfComponent;
  let fixture: ComponentFixture<CellIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
