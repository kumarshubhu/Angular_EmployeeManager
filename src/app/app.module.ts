import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { AdminComponent } from './admin/admin.component';
import { ERROR404Component } from './error404/error404.component';

@NgModule({
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
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
