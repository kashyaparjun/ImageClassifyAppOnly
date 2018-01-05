import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgPage } from '../img/img';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  list = [
    {
      text: 'pic 1',
      id: 1,
      url: 'assets/animal.jpg'
    },
    {
      text: 'pic 2',
      id: 2,
      url: 'assets/lion.jpg'
    },
    {
      text: 'pic 3',
      id: 3,
      url: 'assets/mountain.jpg'
    },
    {
      text: 'pic 4',
      id: 4,
      url: 'assets/tree.jpg'
    },
    {
      text: 'pic 5',
      id: 5,
      url: 'assets/car.jpg'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  send(l){
    this.navCtrl.push(ImgPage,{
      data: l
    });
  }

}
