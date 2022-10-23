import { Component, OnInit } from '@angular/core';
import { GifsService } from '@modules/gifs/service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  constructor(private readonly gifsSvc: GifsService) {}

  get resultados(){
    return this.gifsSvc.resultados;
  }

}
