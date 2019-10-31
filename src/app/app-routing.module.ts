import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TablesComponent } from './tables/tables.component';
import { ERROR404Component } from './error404/error404.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'Entries', component: AdminComponent },
{ path: 'Tables', component: TablesComponent },
{ path: 'Error', component: ERROR404Component },
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
