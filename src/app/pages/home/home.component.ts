import { Component, OnInit } from '@angular/core';
import { Category, Producto } from '../../interface/index';
import { MarketplaceService } from '../../services/marketplace.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaCategorias: Category[] = [];
  listaProductos: any[] = [];
  producto: any[] = [];
  loading: boolean = true;
  constructor(private marketplaceService: MarketplaceService) {
    this.marketplaceService.obtenerCategoria().subscribe(
      (categoria: Producto) => {
        this.listaCategorias = Object.values(categoria);
        console.log(this.listaCategorias.length);
        
      },
      (errorServicio) => {
        console.log(errorServicio);
      }
    );
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

  ngOnInit(): void {
  }

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
