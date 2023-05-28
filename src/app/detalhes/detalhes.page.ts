import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage {
  categoriaId: string;
  itemId: string;
  item: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.categoriaId = this.route.snapshot.paramMap.get('categoriaId')!;
    this.itemId = this.route.snapshot.paramMap.get('itemId')!;
    this.item = this.getItemDetalhes(this.categoriaId, this.itemId);
  }

  getItemDetalhes(categoriaId: string, itemId: string) {
    
    switch (categoriaId) {
      case 'lanches':
        return { id: 1, nome: 'Hambúrguer', valor: 10, descricao: 'Delicioso Hambúrguer feito com carne Angus' };
      case 'pratos-entrada-refeicao':
        return { id: 1, nome: 'Salada Caprese', valor: 15, descricao: 'òtima salada feita com ingredientes cultivados no próprio restaurante.' };
      case 'sobremesas':
        return { id: 1, nome: 'Pudim de Leite', valor: 8, descricao: 'Descrição do pudim de leite' };
      case 'bebidas':
        return { id: 1, nome: 'Refrigerante', valor: 5, descricao: 'Descrição do refrigerante' };
      default:
        return null;
    }
  }
}