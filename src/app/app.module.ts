import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { TableListItemComponent } from './table/table-list-item/table-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    TableListItemComponent,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
