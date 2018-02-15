import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController,LoadingController} from 'ionic-angular'


import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage  {

  isConnect = "เชื่อมไม่สำเร็จ";
  color = "danger"

  location  = {
    lat: 13.7251088,
    lng: 100.3529168
  }

  ionViewDidLoad(){  
    this.onLocation();
  }
  
  constructor(public navCtrl: NavController,
              private geolocation:Geolocation ,
              private loadCtrl:LoadingController,
              private toasCtrl:ToastController,) {}

  
  onLocation(){

    const loader = this.loadCtrl.create({
      content:'Getting your Location...'
    });

    loader.present();
    
    this.geolocation.getCurrentPosition({timeout:15000})
    .then((resp) => {
     
      
      this.location.lat =  resp.coords.latitude
      this.location.lng = resp.coords.longitude
      
      console.log(this.location);

      loader.dismiss();
      this.isConnect = "เชื่อมสำเร็จ"
      this.color = "light";
     })
     .catch((error) => {

       console.log('Error getting location', error);
       
       loader.dismiss();
       const toast = this.toasCtrl.create({
         message:'ไม่สามารถเชื่อมต่อ GPS กรุณาตรวจสอบการตั้งค่า!',
         duration :5500
       })
       toast.present();
       this.isConnect = "เชื่อมไม่สำเร็จ"
       this.color = "danger";

     });
     
     
  
  }

}
