import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'table', component: TableComponent},
  {path:'home', component: HomeComponent},
  {path:'test', component: TestComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
