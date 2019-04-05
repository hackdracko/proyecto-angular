import { GenericResponse } from './../../models/response/GenericResponse';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  resultsLength = 3;
  perPage = 2;

  dataSource: MatTableDataSource<GenericResponse>;
  displayedColumn = [
    'id',
    'value1',
    'value2',
    'value3',
    'value4',
    'value5',
    'actions',
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const data = this.getTable();
    this.dataSource = new MatTableDataSource(data);
  }

  getTable() {
    this.paginator.pageIndex = 0;
    const data: GenericResponse[] = [
      {
        id: 1,
        value1: 'a1',
        value2: 'a2',
        value3: 'a3',
        value4: 'a4',
        value5: 'a5',
      },
      {
        id: 2,
        value1: 'b1',
        value2: 'b2',
        value3: 'b3',
        value4: 'b4',
        value5: 'b5',
      },
      {
        id: 3,
        value1: 'c1',
        value2: 'c2',
        value3: 'c3',
        value4: 'c4',
        value5: 'c5',
      },
      {
        id: 4,
        value1: 'd1',
        value2: 'd2',
        value3: 'd3',
        value4: 'd4',
        value5: 'd5',
      },
      {
        id: 5,
        value1: 'e1',
        value2: 'e2',
        value3: 'e3',
        value4: 'e4',
        value5: 'e5',
      }
    ];
    return data;
  }

  add() {
    this.router.navigate(['/user/add']);
  }

  edit(data) {
    console.log(data);
  }

  delete(id) {
    console.log(id);
  }

}
