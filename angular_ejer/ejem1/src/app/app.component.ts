import { Component } from '@angular/core';

import { Item } from './item.model';
import { ItemComponent } from './item.component';

interface Prod {
  desc: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: Item[] = [];

  peliculas: string[] = [];
  titulo = '';
  name = 'Anybody';
  imgUrl = 'assets/favicon.ico';
  isValid = false;
  elems = [
    { desc: 'Elem1', check: true },
    { desc: 'Elem2', check: true },
    { desc: 'Elem3', check: false }
  ];
  birthday = '01-01-1985';
  user = undefined;

  compra: Prod[] = [];

  setName(name: string) {
    this.name = name;
    this.isValid = true;
  }

  addItem1(peli: string) {
    this.peliculas.push(peli);
  }

  addCompra(prod: string) {
    if (prod.trim() !== '') {
      this.compra.push({desc: prod, checked: false});
    } else {
      alert('Caja de texto vacía');
    }
  }

  deleteCompra(prod: Prod) {
    const index = this.compra.indexOf(prod);
    if (index > -1) {
      this.compra.splice(index, 1);
    }
  }



  addItem(desc: string) {
    this.items.push({ desc, checked: false });
}

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
        this.items.splice(index, 1);
    }
}
}
