import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-compras',
  templateUrl: './boton-compras.component.html',
  styleUrls: ['./boton-compras.component.scss']
})
export class BotonComprasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  paginaCompras(){
    this.router.navigate(['compras']);
  }
}
