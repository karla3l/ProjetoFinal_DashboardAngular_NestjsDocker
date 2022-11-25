import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [
    {id: 1, name: 'Thor'}, //undefined
    {id: 2, name: 'Capitao america'},
    {id: 3, name: 'Homem de ferro'},
    {id: 4, name: 'Hulk'},
];


constructor() { }
 // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
 ngOnInit(): void { }
  selectHero(hero: Hero): void{
    this.selectedHero = hero
  }

}
