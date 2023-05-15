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
  loading: boolean = true;
  constructor(private marketplaceService: MarketplaceService) {
   
    // this.marketplaceService.obtenerCategoria().subscribe(
    //   (categoria: Producto) => {
    //     this.listaCategorias = Object.values(categoria);
    //     console.log(this.listaCategorias.length);
        
    //   },
    //   (errorServicio) => {
    //     console.log(errorServicio);
    //   }
    // );
  }

  ngOnInit(): void {
  }


}
