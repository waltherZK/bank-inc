import { Component, OnInit, Input } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';
import { Producto } from 'src/app/interface';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {
  @Input()
  id: number = 0;
  cantidad: number = 1;
  constructor(private marketPlaceService: MarketplaceService) {}

  ngOnInit(): void {}
  agregarCarrito() {
    const key = this.id;
    const value = this.cantidad;

    this.marketPlaceService.agregarProductoCarrito(key, value);
  }
  quitarCarrito() {
    const key = this.id;
    const value = this.cantidad;

    this.marketPlaceService.quitarCarrito(key, value);
  }
}
