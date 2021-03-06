import {Component, OnInit} from '@angular/core';
import {ListaDeseosService  } from '../../app/services/lista-deseos.services';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService, private _navCtrl: NavController) {
  }

  ngOnInit() {
  }

  verDetalles(lista, idx) {
    this._navCtrl.push(DetalleComponent,  { lista, idx });
  }
}
