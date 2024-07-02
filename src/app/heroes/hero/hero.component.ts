import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent{

  public name:string = 'ironman';
  public age: number = 45;

  get capitalzeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${this.age}`
  }

  changeHero():void {
    this.name = 'Batman';
  }

  changeAge():void {
     this.age = 20;
  }

  reset():void {
    this.name = 'ironman';
    this.age = 45;
  }


}
