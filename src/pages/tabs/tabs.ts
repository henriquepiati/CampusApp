import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { ListaPage } from '../lista/lista';
import { MapaPage } from '../mapa/mapa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = ListaPage;
  tab3Root = MapaPage;

  constructor() {

  }
}
