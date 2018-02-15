import { ListPage } from './../list/list';
import { Component } from '@angular/core';

import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = MapPage;


  constructor() {

  }
}
