import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from 'src/app/services/marketplace.service';
import { Producto } from '../../interface/index';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  listaProductos: Producto[] = [];
  constructor(
    private marketplaceService: MarketplaceService
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
}
