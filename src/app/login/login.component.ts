import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //atributos
  mensagens_sucesso = [];
  mensagens_erro = [];

  //declarando o atributo para utilizar HttpClient
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  //função executada no evento SUBMIT do formulário
  autenticarUsuario(formLogin) : void {
    
    //limpar as mensagens exibidas na página
    this.mensagens_sucesso = [];
    this.mensagens_erro = [];    

    //realizando a chamada para a API..
    this.httpClient.post(environment.apiUrl + "/login", formLogin.form.value)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
          //limpar os campos do formulário
          formLogin.form.reset();
        },
        e => {
          this.mensagens_erro = e.error;
        }
      )
  }

}
