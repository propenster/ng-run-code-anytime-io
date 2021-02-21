import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { HandlerService } from 'src/app/services/handler.service';
import { environment } from 'src/environments/environment';
import { JDoodleModel } from '../runner/JDoodleModel';

@Component({
  selector: 'app-code-runner',
  templateUrl: './code-runner.component.html',
  styleUrls: ['./code-runner.component.css']
})
export class CodeRunnerComponent implements OnInit {

   // http://api.paiza.io:80/runners/create?source_code=%3C%3Fphp%20echo%20'What%20is%20going%20on%20fellas%5Cn'%3B%20%20%20echo%20'What%20is%20your%20name%20my%20nigga%3F'%20%20&language=php&longpoll=true&api_key=guest
  // http://api.paiza.io:80/runners/get_details?id=GXu_G-PDqJ24LvSKcV_eDg&api_key=guest

  @Input() code: string = '';
  @Input() language: string = '';
  @Input() output: string = '';
  codeResult: any = {};
  languages: any = ['C', 'C#', 'java', 'python2', 'python3', 'php', 'nodejs'];
  paizaRequestId: string = '';
  paizaResponse: any = {};
  codeRequest: JDoodleModel = {clientId: environment.clientId, clientSecret: environment.clientSecret, script: this.code.toLowerCase(), language: this.language.toLowerCase(), versionIndex: '0'};

  constructor(public service: HandlerService, public http: HttpClient) { }

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
      //console.log(res);
      //this.paizaResponse = res;
      this.output = res['output'];
    });


  }

}
