import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})



export class TableService {

  tables: Array<Table> = [
    {id: 1, tableNumber: 1, maxSeating: 4, isReserved:true},
    {id: 2, tableNumber: 2, maxSeating: 4, isReserved:false},
    {id: 3, tableNumber: 3, maxSeating: 4, isReserved:true}
  ]

  constructor() { }

  getTables()
  {
    return this.tables;
  }
}
