import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  producto: any[] = [];
  constructor(private marketplaceService: MarketplaceService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.marketplaceService.obtenerProducto(termino).subscribe(
      (data: any) => {
        this.producto = data;
        console.log(this.producto);

        //this.loading = false;
      },
      (errorServicio) => {
        console.log(errorServicio);
      }
    );
  }
}
