import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppState } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { loginReducer } from 'src/store/login/login.reducers';
import { registerReducer } from 'src/store/register/register.reducers';
import { RegisterPageModule } from './register.module';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let page;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: "home", loadChildren: () => import('./../../pages/home/home.module').then(m => m.HomePageModule) }
        ]),
        ReactiveFormsModule,
        RegisterPageModule,
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", loadingReducer),
        StoreModule.forFeature("login", loginReducer),
        StoreModule.forFeature("register", registerReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = fixture.debugElement.nativeElement;
    store = TestBed.get(Store);

  }));

  it('should create register form on page init', () => {
    fixture.detectChanges();

    expect(component.registerForm).not.toBeUndefined();
  })

  // it('should not be allowed to register with form invalid', () => {
  //   fixture.detectChanges();

  //   clickOnRegisterButton()

  //   store.select("register").subscribe(state => {
  //     expect(state.isRegistering).toBeFalsy();
  //   })
  // })

  it('given form is valid, when user clicks on register, then register', () => {
    fixture.detectChanges();

    // fillForm();

    // clickOnRegisterButton();

    store.select("register").subscribe(state => {
      expect(state.isRegistering).toBeTruthy();
    })
  })
});

