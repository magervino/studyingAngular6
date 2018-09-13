import { Component } from "@angular/core";

//TS: annotation = decorator
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
//TS: por padrão a classe é privada, para deixar a classe publica adicionar EXPORT
export class AppComponent{

  
}
