import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nameUser:string = "Christopher";
  public nameUser2:string = "fresnorock";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNum(a:String, b:String): void{
      //alert(5+5);
      //alert(a + b);
  }

  ionViewDidLoad() { //pontos de execução... sempre que a view(pagina) for carregada será executada esta função
      this.somaDoisNum("Olá, ", "mundo!");
  }

}
