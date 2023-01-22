import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionado = new EventEmitter<any>();

  @Output() cambiarView = new EventEmitter<any>();

  @Output() searchData = new EventEmitter<any>();

  categoriaSeleccionada = "others";

  paisSeleccionado= "col";

  cambio="aqui algo";

  id_myToys= "";

  id_myDebt= "";

  categorias:any[]=[
    {value: 'general',nombre:'general'},
    {value: 'business',nombre:'negocio'},
    {value: 'others',nombre:'others'}
  ]

  paises:any[]=[
    {value: 'ar',nombre:'Argentina'},
    {value: 'pa',nombre:'Panama'},
    {value: 'col',nombre:'Colombia'}
  ]

  buscarNoticia(){
    //console.log(this.categoriaSeleccionada);
    //console.log(this.paisSeleccionado);

    const PARAMETROS ={
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    } 

    this.parametrosSeleccionado.emit(PARAMETROS);

  }

  searchMyDebt(){
    const dataSend ={
      typeSearch: 1,
      id: this.id_myDebt
    } 
    console.log(dataSend);

    this.searchData.emit(dataSend);
  }

  serarchToysSeparate(){
    const dataSend ={
      typeSearch: 2,
      id: this.id_myToys
    } 
    console.log(dataSend);

    this.searchData.emit(dataSend);
  }

  cambiarPantallas(){
    //console.log(this.categoriaSeleccionada);
    //console.log(this.paisSeleccionado);
    this.cambio="cambie";
    const data ={
      dato: true
    } 
    console.log("desde la consola");
    this.cambiarView.emit(data);
  }

}
