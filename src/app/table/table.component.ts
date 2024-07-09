import { Component, OnInit, TemplateRef} from '@angular/core';
import { TableService } from '../core/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: any;
  showComments = true;

  constructor(private service: TableService){

  }

  canShowComments()
  {
    return this.showComments;
  }

  ngOnInit(): void {
    this.tables = this.service.getTables();
  }

}
