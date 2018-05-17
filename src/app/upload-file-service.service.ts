import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UploadFileServiceService {

  constructor(private http: HttpClient) { }

  pushFileToProject1(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const req = new HttpRequest('POST', '/project1', formdata, {reportProgress: true, responseType: 'text'});
    return this.http.request(req);
  }

  pushFileToProject2(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    const req = new HttpRequest('POST', '/project2', formdata, {reportProgress: true, responseType: 'text'});

    return this.http.request(req);
  }

}
