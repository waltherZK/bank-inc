import { Component, Inject, OnInit } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit {
  datosLocalStorage: any;

  constructor(
    private marketplaceService: MarketplaceService  ) {
    this.datosLocalStorage = this.marketplaceService.obtenerCarrito();
  }

  ngOnInit(): void {}

  crearArchivo() {
  
    const xlsxData = this.datosLocalStorage.map((item: { title: string; cantidad: number }) => {
      return {
        title: item.title,
        cantidad: item.cantidad,
        
      };
    });
  
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(xlsxData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  
    const fileExtensions = ['csv', 'xlsx', 'xls'];
  
    fileExtensions.forEach((fileExtension) => {
      let buffer: any;
      let bookType: XLSX.BookType | undefined;
  
      if (fileExtension === 'csv') {
        const csvContent = XLSX.utils.sheet_to_csv(worksheet);
        buffer = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        bookType = undefined;
      } else {
        buffer = XLSX.write(workbook, { type: 'buffer', bookType: fileExtension as XLSX.BookType });
        bookType = fileExtension as XLSX.BookType;
      }
  
      const fileName = `data${fileExtension}.${fileExtension}`;
      const dataBlob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
      });
      const downloadLink = document.createElement('a');
      const url = URL.createObjectURL(dataBlob);
      downloadLink.href = url;
      downloadLink.setAttribute('download', fileName);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
  
}
