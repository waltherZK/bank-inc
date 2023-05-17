import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/index';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  constructor(private http: HttpClient) {
    console.log('service started');
  }

  getQuery(query: string): Observable<Producto> {
    const url = `https://api.escuelajs.co/api/v1/${query}`;
    return this.http.get<Producto>(url);
  }
  listaProductos() {
    return this.getQuery(`products/`);
  }
  obtenerCategoria() {
    return this.getQuery(`categories`);
  }
  obtenerProducto(termino: string): Observable<Producto[]> {
    return this.http
      .get<Producto[]>(
        `https://api.escuelajs.co/api/v1/products/?title=${termino}`
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  agregarProductoCarrito(key: string, value: number) {
    const dato = localStorage.getItem('productosCarrito');
    const productosCarrito = [
      {
        title: key,
        cantidad: value,
      },
    ];

    if (dato) {
      if (dato && JSON.parse(dato)) {
        let nuevoObjeto: { title: string; cantidad: number }[] = [];
        let encontrado = false;
        const dato = localStorage.getItem('productosCarrito');

        if (dato !== null) {
          nuevoObjeto = JSON.parse(dato);
          nuevoObjeto.forEach((item: any) => {
            if (item.title === key) {
              item.cantidad = item.cantidad + 1;
              encontrado = true;
            }
          });
        }

        if (!encontrado) {
          nuevoObjeto.push({ title: key, cantidad: 1 });
        }

        localStorage.setItem('productosCarrito', JSON.stringify(nuevoObjeto));
      }
    } else {
      localStorage.setItem(
        'productosCarrito',
        JSON.stringify(productosCarrito)
      );
    }
  }

  quitarCarrito(key: string) {
    const dato = localStorage.getItem('productosCarrito');
    let objetosCarrito: { title: string; cantidad: number }[] = [];

    if (dato) {
      objetosCarrito = JSON.parse(dato);

      const objetoEncontrado = objetosCarrito.find(
        (item) => item.title === key
      );

      if (objetoEncontrado) {
        if (objetoEncontrado.cantidad > 1) {
          objetoEncontrado.cantidad -= 1;
        } else {
          objetosCarrito = objetosCarrito.filter((item) => item.title !== key);
        }

        localStorage.setItem(
          'productosCarrito',
          JSON.stringify(objetosCarrito)
        );
      }
    }
  }

  obtenerCarrito() {
    const localString = localStorage.getItem('productosCarrito');
    return localString ? JSON.parse(localString) : [];
  }
  obtenerProductoId(title: string) {}
}
