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
    const url = `https://fakestoreapi.com/${query}`;
    //console.log(url);
    return this.http.get<Producto>(url);
  }
  listaProductos() {
    //console.log(this.getQuery(``));

    return this.getQuery(`products/`);
  }
  obtenerCategoria() {
    //console.log(this.getQuery(`categories`));

    return this.getQuery(`products/categories`);
  }
  obtenerProducto(termino: string) {
    return this.getQuery(`products/?title=${termino}`).pipe(
      map((data: any) => data)
    );
  }

  agregarProductoCarrito(key: any, value: number) {
    const dato = localStorage.getItem('productosCarrito');
    const productosCarrito = [
      {
        id: key,
        cantidad: value,
      },
    ];

    if (dato) {
      if (dato && JSON.parse(dato)) {
        let nuevoObjeto: { id: any; cantidad: number }[] = [];
        let encontrado = false;
        const dato = localStorage.getItem('productosCarrito');

        if (dato !== null) {
          nuevoObjeto = JSON.parse(dato);
          nuevoObjeto.forEach((item: any) => {
            if (item.id === key) {
              item.cantidad = item.cantidad + 1;
              encontrado = true;
            }
          });
        }

        if (!encontrado) {
          nuevoObjeto.push({ id: key, cantidad: 1 });
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

  quitarCarrito(key: any, value: number) {
    console.log(key);
    
    const dato = localStorage.getItem('productosCarrito');
    let objetosCarrito: { id: any; cantidad: number }[] = [];

    if (dato) {
      objetosCarrito = JSON.parse(dato);

      const objetoEncontrado = objetosCarrito.find((item) => item.id === key);

      if (objetoEncontrado) {
        if (objetoEncontrado.cantidad > 1) {
          objetoEncontrado.cantidad -= 1;
        } else {
          objetosCarrito = objetosCarrito.filter((item) => item.id !== key);
        }

        localStorage.setItem(
          'productosCarrito',
          JSON.stringify(objetosCarrito)
        );
      }
    }
  }
}
