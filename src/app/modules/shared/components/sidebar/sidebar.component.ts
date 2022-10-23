import { Component } from '@angular/core';
import { GifsService } from '@modules/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private readonly gifsSvc: GifsService) {}

  get Historial() {
    return this.gifsSvc.historial;
  }

  buscar(item: string) {
    this.gifsSvc.buscarGifs(item).subscribe((resOk) => {
      console.log('Todo salio bien', resOk);
    });
  }
}
