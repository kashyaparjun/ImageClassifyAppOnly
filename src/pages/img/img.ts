import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpprovProvider } from '../../providers/httpprov/httpprov';

/**
 * Generated class for the ImgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img',
  templateUrl: 'img.html',
})
export class ImgPage {

  list = {
    id: 1,
    url: "",
    text: ""
  };
  t = [];
  res: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpprovProvider) {
    this.list = this.navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPage');
  }

  sendone(){
    this.http.simg(this.list.id).subscribe(res => {
      this.res = res;
    });
    this.t = this.res.split("\n");
  }

}
