import { Component, OnInit } from '@angular/core';
import {GetReportService} from '../get-report.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Match} from '../models/matches.model';
import {Router} from '@angular/router';
import {GetMatchService} from "../get-match.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  dataSource = new MatchDataSource(this.reportService, this.getMatchService);
  displayedColumns = ['Source1', 'Source2', 'Similarity', 'Action'];

  constructor(private reportService: GetReportService, private getMatchService: GetMatchService,  private router: Router) {
  }

  ngOnInit() {
  }
  sideBysideRequest(index: number) {
    this.router.navigate(['/side-by-side', index]);
  }
}

export class MatchDataSource extends DataSource<any> {
  rows: number;
  match: Match[];
  constructor(private reportService: GetReportService, private getMatchService: GetMatchService) {
    super();
  }

  connect(): Observable<Match[]> {
    const report = this.reportService.getReport();
    report.subscribe(result => {
      this.rows = result.length;
      this.match = result;
      this.getMatchService.setMatches(result);
    });
    return report;
  }

  disconnect() {
  }
}

