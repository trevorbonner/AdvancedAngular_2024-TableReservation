import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/helpers/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReservationCompleteComponent } from './reservation/reservation-complete/reservation-complete.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'table', component: TableComponent, canActivate: [AuthGuardGuard]},
  {path:'home', component: HomeComponent},
  {path:'test', component: TestComponent},
  {path:'reservation', component: ReservationComponent, canActivate: [AuthGuardGuard]},
  {path: 'reservation-complete', component: ReservationCompleteComponent, canActivate: [AuthGuardGuard]},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
