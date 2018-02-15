import { ListDetailPage } from './../list-detail/list-detail';

import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  datas: any;

  constructor(
    public dataProvider: DataProvider,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private admobFree: AdMobFree,
    private platform: Platform) {


    console.log(dataProvider.data);
    this.datas = dataProvider.data;



  }

  ionViewDidLoad() {
    this.presentAlert();
    if (this.platform.is('cordova')) {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-9309829064818731~9181756654',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
    }

  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'เรียน... พี่น้องทุกท่าน',
      subTitle: 'ท่านใดขับรถไปเสียที่ไหน ในประเทศไทย โทร. 02-354-6324 เป็นเบอร์โครงการหน่วย ตำรวจช่าง ในโครงการ พระราชดำริ สามารถช่วยท่านได้ทุกที่ จะโทรสอบถามอาการ แล้วเตรียมพร้อมที่จะมาช่วยให้คุณสามารถเดินทางไปต่อได้',
      buttons: ['ปิด (X)']
    });
    alert.present();
  }
  clickEventHandler(data) {

    console.log(data);
    this.navCtrl.push(ListDetailPage, { data: data });

  }


}
