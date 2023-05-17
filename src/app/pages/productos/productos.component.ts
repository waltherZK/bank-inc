import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';
import { Producto } from '../../interface/index';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  @Input() buscarProducto: any;
  listaProductos: any[] = [];
  estado: boolean = false;
  constructor(
    private marketplaceService: MarketplaceService,
    private router: Router
  ) {
    this.marketplaceService.listaProductos().subscribe(
      (productos) => {
        this.listaProductos = Object.values(productos);
      },
      (errorServicio) => {
        console.log(errorServicio);
      }
    );
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.buscarProducto !== undefined) {
      if (this.buscarProducto.length > 0) {
        this.estado = true;
      } else {
        this.estado = false;
      }
    }
  }
  verProducto(producto: Producto) {
    this.router.navigate(['producto'], { state: producto });
  }
}
