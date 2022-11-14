import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // add services to parameters of constructor (dependency injection)
  constructor(private heroService: HeroService) {

  }

  getHeroes(): void {
    // async call so app doesn't have to wait for fetching heroes
    // uses observer design pattern, use in SDD -> DesignKeuzes
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // 
  ngOnInit(): void {
    this.getHeroes();
  }

}
