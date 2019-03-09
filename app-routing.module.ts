import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {EmployeesComponent} from "./employees/employees.component";
import {PositionsComponent} from "./positions/positions.component";
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from "./nav/nav.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


//adding all routes to the Routes array
//
const routes: Routes = [
  
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'positions', component: PositionsComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'nav', component: NavComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
