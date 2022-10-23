import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadoComponent],
  imports: [CommonModule, GifsRoutingModule, HttpClientModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
