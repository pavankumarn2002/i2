import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellVrComponent } from './cell-vr.component';

describe('CellVrComponent', () => {
  let component: CellVrComponent;
  let fixture: ComponentFixture<CellVrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellVrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
