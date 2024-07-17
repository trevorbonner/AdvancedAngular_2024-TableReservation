import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { TableListItemComponent } from './table/table-list-item/table-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationCompleteComponent } from './reservation/reservation-complete/reservation-complete.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    TableListItemComponent,
    PageNotFoundComponent,
    TestComponent,
    ReservationComponent,
    ReservationCompleteComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
