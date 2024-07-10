import { Component, OnInit, TemplateRef} from '@angular/core';
import { Table } from '../core/models/table.model';
import { TableService } from '../core/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: Array<Table> = []
  showComments = true;

  constructor(private service: TableService){

  }

  canShowComments()
  {
    return this.showComments;
  }

  ngOnInit(): void {
    //this.tables = this.service.getTables();
    // this.service.getTableById(1).subscribe(
    //   value => alert(value.id + '   ' + value.maxSeating)
    // );
    this.service.getTables().subscribe(
      value => this.tables = value
    )
  }

}
