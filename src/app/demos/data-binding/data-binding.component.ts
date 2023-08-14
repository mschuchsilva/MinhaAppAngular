import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [],
})
export class DataBindingComponent {
  public contadorClique: number = 10;
  public urlImage: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';
  public nome: string = '';
  public nome2: string = '';
  public nome3: string = '';

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  keyUp(event: any) {
    this.nome = event.target.value;
  }
}
