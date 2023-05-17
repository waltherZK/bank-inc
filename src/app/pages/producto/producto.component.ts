import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.titulo = params['title'];
    this.imagen = params['images'];
    this.descripcion = params['description'];
    this.precio = params['price'];   
  }


}
