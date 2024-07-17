import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { GetTableByIdResponse, GetTablesResponse, Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})


export class TableService {

  tables: Array<Table> = []

  constructor(private htppClient : HttpClient) { }

  baseUrl = 'https://localhost:7039/';

  getTableById(id: number) : Observable<Table>
  {
    return this.htppClient.get<Table>(this.baseUrl + 'table/v1/' + id);
  }

  getTables() : Observable<Table[]>
  {
    return this.htppClient.get<Table[]>(this.baseUrl + 'table/v1');
  }

  // getActiveTables() : Observable<Table[]>
  // {
  //   return this.getTables().pipe();
  // }

}
