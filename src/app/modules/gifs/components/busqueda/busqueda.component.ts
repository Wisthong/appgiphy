import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GifsService } from '@modules/gifs/service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar')
  txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private readonly gifsSvc: GifsService) {}

  buscar() {
    const { value } = this.txtBuscar.nativeElement;
    if (value.trim().length === 0) {
      return;
    }
    this.gifsSvc.buscarGifs(value.trim().toLowerCase()).subscribe((resOk)=>{
      console.log(resOk);

    });
    this.txtBuscar.nativeElement.value = '';
  }
}
