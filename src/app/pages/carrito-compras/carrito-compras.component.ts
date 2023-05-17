import { Component, OnInit, Input } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {
  @Input()
  title!: string;
  cantidad: number = 1;
  constructor(private marketPlaceService: MarketplaceService) {}

  ngOnInit(): void {}
  agregarCarrito() {
    const key = this.title;
    const value = this.cantidad;
    this.marketPlaceService.agregarProductoCarrito(key, value);
  }
  quitarCarrito() {
    const key = this.title;
    this.marketPlaceService.quitarCarrito(key);
  }
}
