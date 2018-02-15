import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {

  data :any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private callNumber: CallNumber) {
                this.data = this.navParams.get('data');

  }

  
  Call(){
    console.log(this.data.C)
    this.callNumber.callNumber(this.data.C, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

}
