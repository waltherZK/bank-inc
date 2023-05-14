import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/index';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  title!: string;
  images!: string;
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
    this.title = params['title'];
    this.images = params['images'];
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

  agregarCarrito(){
    console.log('agregar carrito');
    
  }

}
