import { Component } from '@angular/core';


@Component({
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
  //: ['jumbotron.component.css'],

})

export class JumbotronComponent {
  private jumboTitle:string;
  private jumboText:string;
  private jumboLinkText:string;
  private jumboLink:string;


  constructor() {
    this.jumboTitle = 'Hello, world!';
    this.jumboText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
    this.jumboLinkText = 'Wow!';
    this.jumboLink = 'http://heroku.com';

  }



}
