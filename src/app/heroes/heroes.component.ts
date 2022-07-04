import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/assets/data/mock-heroes';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(h => this.heroes = h);
  }

}
