import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpprovProvider } from '../../providers/httpprov/httpprov';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image2: string;
  base64Image: string;
  ip: string;
  res: string;
  t = [];
  constructor(public navCtrl: NavController, private camera: Camera, private http: HttpprovProvider) {

  }

  takePicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 1000,
      targetWidth: 1000
    }).then((imageData) => {
      this.base64Image = imageData;
      this.base64Image2 = "data:image/jpeg;base64," + imageData;
      alert(this.base64Image);
    }).catch(err => {
      alert(err);
    });
  }

  sendone(){
    this.http.ip = this.ip;
    this.http.sender(this.base64Image).subscribe(res => {
      this.res = res;
    });
    this.t = this.res.split("\n");
    console.log(this.ip);
  }

  saved(){
    this.http.ip = this.ip;
    this.navCtrl.push(ListPage);
  }
  
}
