import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SlideComponent } from './pages/slide/slide.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { BotonComprasComponent } from './pages/boton-compras/boton-compras.component';

import * as XLSX from 'xlsx';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ProductoComponent,
    ToArrayPipe,
    CarritoComprasComponent,
    NavbarComponent,
    SlideComponent,
    ComprasComponent,
    BotonComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [{ provide: 'xlsx', useValue: XLSX }],
  bootstrap: [AppComponent],
})
export class AppModule {}
