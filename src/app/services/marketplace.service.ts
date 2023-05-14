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
    //console.log(url);
    return this.http.get<Producto>(url);
  }
  obtenerCategoria() {
    //console.log(this.getQuery(`categories`));

    return this.getQuery(`categories`);
  }
  obtenerProducto(termino: string) {
    return this.getQuery(`products/?title=${termino}`).pipe(
      map((data: any) => data)
    );
  }
  listaProductos() {
    //console.log(this.getQuery(``));

    return this.getQuery(`products`);
  }
}
