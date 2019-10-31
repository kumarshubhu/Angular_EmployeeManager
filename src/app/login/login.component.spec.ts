import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TablesComponent } from '../tables/tables.component';
import { AdminComponent } from '../admin/admin.component';
import { ERROR404Component } from '../error404/error404.component';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,

        LoginComponent,

        TablesComponent,

        AdminComponent,

        ERROR404Component
      ],
      imports: [FormsModule, NgxPaginationModule,
        BrowserModule,
        AppRoutingModule, ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call verifyUser method', () => {
    const htmlselector = fixture.debugElement.query(By.css('.i1'));
    debugger;
    htmlselector.triggerEventHandler('click', null);
    spyOn(component, 'verifyUser');
    expect(component.verifyUser).toHaveBeenCalled();
  });

  it('should have userid formcontrol', () => {
    const group = new FormGroup('');
    component.LoginGroup.
  });
});
