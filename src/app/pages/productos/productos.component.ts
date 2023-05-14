import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/index';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  @Input() data: Producto[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verProducto(producto: any) {
    this.router.navigate(['producto'], { state: producto });
  }
}
