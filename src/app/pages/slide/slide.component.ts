import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from 'src/app/services/marketplace.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  listaProductos: any[] = [];
  //@Input() data: Producto[] = [];
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
}
