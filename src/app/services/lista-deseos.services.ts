import {Injectable} from '@angular/core';
import { Lista } from '../clases/lista';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    let lista1 = new Lista('Compras de supermecado');
    let lista2 = new Lista('juegos que deseo');
    let lista3 = new Lista('Cosas de la universidad');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log("servicio inicializado");
  }


}
