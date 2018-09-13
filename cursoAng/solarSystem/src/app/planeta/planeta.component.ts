import { Component, Input, OnInit } from "@angular/core";
import { Planeta } from "./planeta";

@Component({
    selector: 'solar-planeta',
    templateUrl: './planeta.component.html',
    styles: ['']
})
export class PlanetaComponent{

    @Input('dados') planeta = new Planeta();//a anotação input transforma a propriedade da classe em um atributo html

    //No HTML: lista | json - para transformar um objeto json em texto
    //Exemplo: dados | json

    
    //ngOnInit - iniciar após receber o objeto
    //ngOnInit(){
        //this.titulo = this.dados.titulo;
        //this.imagem = this.dados.imagem;
        //this.descricao = this.dados.conteudo;
    //}
}