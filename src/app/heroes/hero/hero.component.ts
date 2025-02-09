import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;


  // Esto es un getters, metodo que retorna el valor de una propiedad
  get capitalizedName():string {
    return this.name.toUpperCase();


  }



  // Esto es un metodo, que retorna un string
   getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
