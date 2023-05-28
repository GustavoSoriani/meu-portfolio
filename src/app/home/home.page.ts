import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    
  ) {}

  abrirCategoria(categoriaId: string) {
    this.navCtrl.navigateForward(`/categoria/${categoriaId}`);
  }

  abrirPratoDia() {
    this.navCtrl.navigateForward('/prato-dia');
  }

}
