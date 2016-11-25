import { Component } from '@angular/core';
import {Hero} from './home/Hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Dr.Strange' },
  { id: 12, name: 'Spiderman' },
  { id: 13, name: 'Wolverine' },
  { id: 14, name: 'Captain America' },
  { id: 15, name: 'Black Panter' },
  { id: 16, name: 'Iroman' },
  { id: 20, name: 'Howkeye' }
];


@Component({
  selector: 'my-app',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor = "let hero of heroes">
      <span>{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
  `
})
export class AppComponent {
  title = 'Marvel Heroes';
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Spiderman'
  };
}
