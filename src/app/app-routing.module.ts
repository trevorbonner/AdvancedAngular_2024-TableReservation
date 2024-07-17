import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReservationCompleteComponent } from './reservation/reservation-complete/reservation-complete.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo:'/reservation', pathMatch:'full'},
  {path:'table', component: TableComponent},
  {path:'home', component: HomeComponent},
  {path:'test', component: TestComponent},
  {path:'reservation', component: ReservationComponent},
  {path: 'reservation-complete', component: ReservationCompleteComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
