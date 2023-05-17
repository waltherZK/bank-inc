import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';
import { Router } from '@angular/router';
import { Producto, Category } from '../../interface/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  producto: Producto[] = [];
  listaCategorias: Category[] = [];
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(
    private marketplaceService: MarketplaceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    if (termino.length >= 3) {
      this.marketplaceService.obtenerProducto(termino).subscribe(
        (data: Producto[]) => {
          this.producto = data;
          this.newItemEvent.emit(this.producto);
        },
        (errorServicio) => {
          console.log(errorServicio);
        }
      );
    } else {
      this.newItemEvent.emit((this.producto = []));
    }
  }

  home() {
    this.newItemEvent.emit((this.producto = []));
    this.router.navigate(['home']);
  }

  categorias() {
    this.marketplaceService.obtenerCategoria().subscribe(
      (categoria: any) => {
        this.listaCategorias = categoria;
      },
      (errorServicio) => {
        console.log(errorServicio);
      }
    );
  }
}
