import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExemplifyModule } from 'angular-exemplify';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ExemplifyModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          closeButton: true,
          disableTimeOut: false,
          progressBar: true,
          toastClass: 'toast',
          positionClass: 'toast-bottom-right',
          enableHtml: true
        }),
        ToastContainerModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a empty title ''`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('');
  });

  it(`should have a empty message ''`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.message).toEqual('');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('@sebgroup/ngx-toastr');
  });
});
