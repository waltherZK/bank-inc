import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interface/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listaCategorias: Category[] = [];
  loading: boolean = true;
  @Input() buscarProducto: any;
  constructor() {}

  ngOnInit(): void {}
  addItem(newItemEvent: any) {
    this.buscarProducto = newItemEvent;
  }
}
