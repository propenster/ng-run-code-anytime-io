import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
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
  @Input() output: string = '';
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

  convertXmlToJson(){
    const params = new HttpParams()
    .set('xml', this.code.trim());

    return this.http.get('https://api.factmaven.com/xml-to-json/?xml='+this.code).subscribe((res: [])=>{
      // this.paizaResponse = res;
      // console.log(this.paizaResponse);
      // this.output = "Why is this not showing..." + this.paizaResponse;
      // console.log(this.output);
      console.log(res);
      this.output = JSON.stringify(res, null, 2);
    })
  }

}


// print("Welcome to ANgular runcode anytime.io");

//curl -H "Content-Type: application/json; charset=UTF-8" -X POST -d '{"clientId": "YourClientId","clientSecret":"YourClientSecret","script":"","language":"php","versionIndex":"0"}' https://api.jdoodle.com/v1/execute

//echo<?php echo \"Weeeeeeeee\"; ?>
//https://api.factmaven.com/xml-to-json?xml=https://example.com/feed.xml
//https://www.w3schools.com/xml/note.xml




// <item contentType="tv_episode" contentId="df9c946a-e891-11ea-adc1-0242ac120002"><pubDate>2020-08-27T11:39:57-05:00</pubDate><title locale="en-US">Episode Title</title><description locale="en-US">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</description><rating systemCode="us-tv">TV-14</rating><artwork url="https://example.com/image.jpg" type="tile_artwork" locales="en-US" /></item>
