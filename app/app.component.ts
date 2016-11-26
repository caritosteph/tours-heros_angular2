import { Component } from '@angular/core';
import {Hero} from './home/Hero';
import './sass/home.scss';

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
    <li *ngFor = "let hero of heroes" (click) = "onSelect(hero)">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>

  <div *ngIf = "selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>


  `
})
export class AppComponent {
  title = 'Marvel Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onselect(hero: Hero):void{
    this.selectedHero = hero
  }
}
