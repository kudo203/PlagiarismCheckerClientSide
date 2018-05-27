import { Component, OnInit } from '@angular/core';
import {GetReportService} from '../get-report.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Match} from '../models/matches.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  dataSource = new MatchDataSource(this.reportService);
  displayedColumns = ['Source1', 'Source2', 'Similarity', 'Action'];

  constructor(private reportService: GetReportService) {
  }

  ngOnInit() {
  }
}

export class MatchDataSource extends DataSource<any> {
  rows: number;
  constructor(private reportService: GetReportService) {
    super();
  }

  connect(): Observable<Match[]> {
    const report = this.reportService.getReport();
    report.subscribe(result => {
      this.rows = result.length;
    });
    return report;
  }

  disconnect() {
  }
}

