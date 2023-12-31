import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit,OnChanges {
  @Input() selectedHero!: Hero;

  constructor() {
    // console.log(this.selectedHero);
  }

  ngOnInit() {
    // console.log(this.selectedHero);
  }
  ngOnChanges()
  {
    console.log(this.selectedHero);
  }
}
