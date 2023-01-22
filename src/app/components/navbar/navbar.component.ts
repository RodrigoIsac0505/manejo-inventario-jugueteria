import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() titulo: string;
  @Output() searchData = new EventEmitter<any>()

  menuInfoClient:any[]=[
    {value: 1,name:'Mis juguetes separados'},
    {value: 2,name:'Mis pagos'},
    {value: 3,name:'Mi deuda'},
    {value: 4,name:'Pago deuda'},
    {value: 5,name:'Separar juguete'}
  ]
  
  menuAdmin:any[]=[
    {value: 6,name:'Todos los juguetes'},
    {value: 7,name:'Agregar cliente'},
    {value: 8,name:'Agregar juguete'},
    {value: 9,name:'Eliminar cliente'},
    {value: 10,name:'Eliminar juguete'}
  ]

constructor(){
  this.titulo = "";
}

menuOptions(data:any){
  this.searchData.emit(data);
}

}
