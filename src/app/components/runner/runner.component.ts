import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HandlerService } from 'src/app/services/handler.service';
import { environment } from 'src/environments/environment';
import { JDoodleModel } from './JDoodleModel';

const httpHeaderOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  // http://api.paiza.io:80/runners/create?source_code=%3C%3Fphp%20echo%20'What%20is%20going%20on%20fellas%5Cn'%3B%20%20%20echo%20'What%20is%20your%20name%20my%20nigga%3F'%20%20&language=php&longpoll=true&api_key=guest
  // http://api.paiza.io:80/runners/get_details?id=GXu_G-PDqJ24LvSKcV_eDg&api_key=guest

  @Input() code: string = '';
  @Input() language: string = '';
  codeResult: any = {};
  languages: any = ['Language', 'C', 'C#', 'JAVA', 'Python', 'Python3', 'Javascript', 'php'];
  paizaRequestId: string = '';
  paizaResponse: any = {};
  codeRequest: JDoodleModel = {clientId: environment.clientId, clientSecret: environment.clientSecret, script: this.code.toLowerCase(), language: this.language.toLowerCase(), versionIndex: '0'};


  constructor(public http: HttpClient, public service: HandlerService) {  }

  ngOnInit(): void {

  }

  runCode(){
    // const params = new HttpParams()
    //   .set('source_code', this.code)
    //   .set('language', this.language)
    //   .set('longpoll', "true");
    //   // .set('api_key', 'guest');

    // this.http.post<JDoodleModel>(environment.jdoodle_baseUrl, JSON.stringify(this.codeRequest), httpHeaderOptions).subscribe((res: any) => {
    // this.paizaRequestId = res.id;
    // console.log(res);
    // this.paizaResponse = res;
    // console.log(this.paizaResponse);
    // })

    console.log(this.codeRequest);

    this.service.runCodeOnline(this.codeRequest).subscribe((res: {})=>{
      console.log(res);
      this.paizaResponse = res;
    });
  }

}


// print("Welcome to ANgular runcode anytime.io");

//curl -H "Content-Type: application/json; charset=UTF-8" -X POST -d '{"clientId": "YourClientId","clientSecret":"YourClientSecret","script":"","language":"php","versionIndex":"0"}' https://api.jdoodle.com/v1/execute

//echo<?php echo \"Weeeeeeeee\"; ?>
