import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/common/table';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables: Table[];

  constructor(private service: CoronaService) { }

  ngOnInit() {
    this.listTables();
  }

  listTables() {
    this.service.getCountry().subscribe(data => {
      this.tables = data
    })
  }


}
