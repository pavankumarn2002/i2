import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Nv} from './nv.component';

describe('Nv', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Nv
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Nv);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(Nv);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Nv);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-app app is running!');
  });
});