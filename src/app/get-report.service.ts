import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Match} from './models/matches.model';


@Injectable()
export class GetReportService {

  constructor(private http: HttpClient) {
  }
  getReport(): Observable<Match[]> {
    return this.http.get<Match[]>('/api/matches');
  }

}
