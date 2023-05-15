import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/index';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  listaProductos: any[] = [];  
  constructor(private marketplaceService: MarketplaceService,private router: Router) {
    this.marketplaceService.listaProductos().subscribe(
      (productos) => {
        console.log(productos);
        this.listaProductos = Object.values(productos);
        console.log(this.listaProductos);
        
       // this.listaCategorias = Object.values(categoria);
        //console.log(this.listaCategorias.length);
        
      },
      (errorServicio) => {
       // console.log(errorServicio);
      }
    );
  }

  ngOnInit(): void {}

  verProducto(producto: any) {
    console.log(producto);
    
    this.router.navigate(['producto'], { state: producto });
  }
}
