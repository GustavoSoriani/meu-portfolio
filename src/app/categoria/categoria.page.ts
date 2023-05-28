import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage {
  categoriaId: string;
  itens: any[];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    this.categoriaId = this.route.snapshot.paramMap.get('categoriaId')!;
    console.log('categoriaId:', this.categoriaId)
    this.itens = this.getItensPorCategoria(this.categoriaId);
  }

  abrirDetalhes(item: any) {
    this.navCtrl.navigateForward(`/detalhes/${this.categoriaId}/${item.id}`);
  }

  getItensPorCategoria(categoriaId: string) {
    
    switch (categoriaId) {
      case 'lanches':
        return [
          { id: 1, nome: 'Hambúrguer', valor: 10 },
          { id: 2, nome: 'Cheeseburguer', valor: 12 },
          { id: 3, nome: 'Sanduíche de Frango', valor: 10 },
          { id: 4, nome: 'Sanduíche Vegano', valor: 12 },
          { id: 5, nome: 'Sanduíche de Peixe', valor: 12 }
        ];
      case 'pratos-entrada-refeicao':
        return [
          { id: 1, nome: 'Salada Caprese', valor: 15 },
          { id: 2, nome: 'Sopa de Legumes', valor: 12 },
          { id: 3, nome: 'Lasanha Bolonhesa', valor: 18 },
          { id: 4, nome: 'Risoto de Cogumelos', valor: 20 },
          { id: 5, nome: 'Frango Grelhado com Legumes', valor: 18 }
        ];
      case 'sobremesas':
        return [
          { id: 1, nome: 'Pudim de Leite', valor: 8 },
          { id: 2, nome: 'Torta de Chocolate', valor: 10 },
          { id: 3, nome: 'Sorvete de Morango', valor: 6 },
          { id: 4, nome: 'Mousse de Maracujá', valor: 8 },
          { id: 5, nome: 'Torta de Limão', valor: 10 }
        ];
      case 'bebidas':
        return [
          { id: 1, nome: 'Refrigerante', valor: 5 },
          { id: 2, nome: 'Suco Natural', valor: 7 },
          { id: 3, nome: 'Água Mineral', valor: 3 },
          { id: 4, nome: 'Cerveja', valor: 6 },
          { id: 5, nome: 'Vinho', valor: 10 }
        ];
      default:
        return [];
    }
  }
}