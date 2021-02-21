import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-to-java',
  templateUrl: './typescript-to-java.component.html',
  styleUrls: ['./typescript-to-java.component.css']
})
export class TypescriptToJavaComponent implements OnInit {

  @Input() code: string = '';
  //@Input() language: string = '';
  @Input() output: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  convertTypescriptToJava(){
    var re = /export/gi;

    this.output = this.code.replace(re, "public");
    //console.log(this.output);

    // var re2 = /\w+\s+\:/g;
    // this.output = this.output.replace(re2, "private " );
    // console.log(this.output);

    //this.output = this.output.replace(/(\w+\s+\:\s+\w/gi, '$2 $1');
    this.output = this.output.replace(/(?<name>\w+) \: (?<surname>\w+)/gi, (...match) => {
      let groups = match.pop();

      return `${groups.surname} ${groups.name}`;
    });
    var reString = /string/gi;
    var reNumber = /number/gi;
    var reBoolean = /boolean/gi;
    var reDate = /^Date$/gi;
    var reCloseBracket = /}/gi;
    var reOpenBracket = /{/gi;

    this.output = this.output.replace(reString, 'private String');
    this.output = this.output.replace(reNumber, 'private int');
    this.output = this.output.replace(reBoolean, 'private bool');
    this.output = this.output.replace(reDate, 'private Date');

    this.output = this.output.replace(reCloseBracket, '\n//Constructor here\npublic ClassName {}\n\n}');
    //this.output = this.output.replace(reOpenBracket, '\n\n//Class Fields here\n\n}');

    //console.log(this.output);



    // /[A-Za-z0-9]/

    // var re = /\w+\s/g;
    // var str = 'fee fi fo fum';
    // var myArray = str.match(re);
    // console.log(myArray);


    // export class model {
    //   welcome: string;
    //   name: string;
    //   occupation: number;
    //   date: Date;
    //   }


  }
}
