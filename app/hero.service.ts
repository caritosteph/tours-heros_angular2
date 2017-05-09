import { Injectable } from '@angular/core';
import { Hero } from './home/Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

}
