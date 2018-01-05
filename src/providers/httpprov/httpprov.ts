import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpprovProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpprovProvider {

  constructor(public http: Http) {
    console.log('Hello HttpprovProvider Provider');
  }

  ip: string;

  sender(img){
    var url = 'http://'+this.ip+'/';
    var send = {
      'set': 0,
      'image': img
    };
    return this.http.post(url, send).map(res => res.json().res);
  }

  simg(number){
    var url = 'http://'+this.ip+'/';
    var send = {
      'set': number
    };
    return this.http.post(url, send).map(res => res.json().res);
  }
}
