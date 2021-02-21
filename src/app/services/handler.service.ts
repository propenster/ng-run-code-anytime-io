import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JDoodleModel } from '../components/runner/JDoodleModel';

export class Model{
  clientId: string;
  clientSecret: string;
  script: string;
  language: string;
  versionIndex: string;
}

const httpHeaderOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  url: string = environment.jdoodle_baseUrl;

  constructor(public http: HttpClient) { }

  runCodeOnline(data):Observable<JDoodleModel>{
    return this.http.post<JDoodleModel>("https://api.jdoodle.com/v1/execute", JSON.stringify(data), httpHeaderOptions).pipe(
      retry(1),
      catchError(this.processError)
    )
  }















  processError(err){
    let message = '';

    if(err instanceof ErrorEvent){
      message = err.error.message;
    }else{
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;

    }
    console.log(message);
    return throwError(message);

  }
}




