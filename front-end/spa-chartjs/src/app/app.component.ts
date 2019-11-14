import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor() {}

  /*
  Usada a seguinte extensão do chrome para consegui usar
  a api no ambiente de desenvolvimento.
  https://chrome.google.com/webstore/search/CORS
  */
  ngOnInit() {
  }

}