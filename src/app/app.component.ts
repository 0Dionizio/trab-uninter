import { Component } from '@angular/core';
import { cadastro } from 'src/app/arquivo'; //Importação de Modulo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
  cadastro_aluno = cadastro; //Declaração de variavel 
}                           //Será usado na tabela 
