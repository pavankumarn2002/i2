import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Sm} from './sm.component';

describe('BreadHome', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Sm
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Sm);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(Sm);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Sm);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-app app is running!');
  });
});