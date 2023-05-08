import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputWorld = '';
  oddWorlds: string[] = [];
  evenWorlds: string[] = [];

  onInputWorld(word: string) {
    if(this.oddWorlds.length % 2 === 0) {
      this.evenWorlds.push(word);
    }else {
      this.oddWorlds.push(word);
    }
  }
}
