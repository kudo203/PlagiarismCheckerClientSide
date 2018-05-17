import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResetHomeService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient) { }

  resetToHome() {
    this.change.emit(null);
  }

  deleteAllFiles(): Observable<HttpEvent<{}>> {
    const req = new HttpRequest('GET', '/deleteAll', {reportProgress: true, responseType: 'text'});
    return this.http.request(req);
  }
}
