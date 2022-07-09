import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcClickComponent } from './vc-click.component';

describe('VcClickComponent', () => {
  let component: VcClickComponent;
  let fixture: ComponentFixture<VcClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
