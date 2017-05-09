import { Component, OnInit } from '@angular/core';
import { Hero } from './home/Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dasboard.component.html',

})

export class DashboardComponent implements {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
     this.heroService.getHeroes()
       .then(heroes => this.heroes = heroes.slice(1, 5));
   }

}
