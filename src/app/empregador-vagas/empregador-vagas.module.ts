import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadorVagasPageRoutingModule } from './empregador-vagas-routing.module';

import { EmpregadorVagasPage } from './empregador-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    EmpregadorVagasPageRoutingModule
  ],
  declarations: [EmpregadorVagasPage]
})
export class EmpregadorVagasPageModule {}
