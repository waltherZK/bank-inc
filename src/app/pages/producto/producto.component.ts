import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/index';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  titulo!: string;
  imagen!: string;
  descripcion!: string;
  precio!: string;
  constructor(private router: Router) {
    this.receiverParameters();
   }

  ngOnInit(): void {
  }

  receiverParameters() {
    const params = this.router.getCurrentNavigation()?.extras.state;
    if(params == null) return;
    if(params == undefined) return;
    console.log(params);
    this.titulo = params['title'];
    this.imagen = params['image'];
    this.descripcion = params['description'];
    this.precio = params['price'];
    //this.objetoProducto = params;
    //params.producto = this.objetoProducto;
    // if(params == null) return;
    // if(params == undefined) return;
    // console.log(Object.values(params['item']));
    // console.log(params['item']);
    // console.log(params['item'].id);
    // this.objetoProducto = params['item'];
    // this.cas = params['item'].thumbnail;
    // console.log(this.objetoProducto);
    
  }


}
