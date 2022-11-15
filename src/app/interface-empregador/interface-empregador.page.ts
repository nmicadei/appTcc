import { StorageService } from './../services/storage.service';
import { IVaga } from './../models/cadastro-vagas.model';
import { Empregador } from './../models/perfil-empregador.model';
import { Component, OnInit } from '@angular/core';
import { InterfaceEmpregadorService } from '../services/interface-empregador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interface-empregador',
  templateUrl: './interface-empregador.page.html',
  styleUrls: ['./interface-empregador.page.scss'],
})
export class InterfaceEmpregadorPage implements OnInit {

  listaVagas: IVaga[] = [];
  empregador: Empregador = new Empregador();

  // eslint-disable-next-line max-len
  constructor(private interfaceEmpregadorService: InterfaceEmpregadorService, private activateRoute: ActivatedRoute, private storageService: StorageService) { }

  async buscarVagas(){
    this.listaVagas = await this.storageService.getAll();
  }

  ngOnInit(): void {
    this.exibirEmpregador();
  }

  ionViewDidEnter(){
    this.buscarVagas();
  }

  async excluirCadastroVagas(categoria: string){
    this.storageService.remove(categoria);
    this.buscarVagas();
  }

  async exibirEmpregador(){
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    await this.interfaceEmpregadorService.buscarEmpregadoPeloId(1).subscribe(retorno =>{
      this.empregador = retorno;
    });

  }

}
