import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FileHandleService {

  constructor(private http: HttpClient) { }

  pushFileToProject1(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const req = new HttpRequest('POST', '/api/project1', formdata, {reportProgress: true, responseType: 'text'});
    return this.http.request(req);
  }

  pushFileToProject2(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const req = new HttpRequest('POST', '/api/project2', formdata, {reportProgress: true, responseType: 'text'});

    return this.http.request(req);
  }

  getAllProject1Files(): Observable<Object> {
    return this.http.get('/api/getProject1Files');
  }

  getAllProject2Files(): Observable<Object> {
    return this.http.get('/api/getProject2Files');
  }

}
