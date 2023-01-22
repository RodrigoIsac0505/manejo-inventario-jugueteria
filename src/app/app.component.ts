import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toys Jugueteria';

  statusDisplay:any[]=[
    {value: 0,status: true},
    {value: 1,status: false},
    {value: 2,status: false},
    {value: 3,status: false},
    {value: 4,status: false},
    {value: 5,status: false},
    {value: 6,status: false},
    {value: 7,status: false},
    {value: 8,status: false},
    {value: 9,status: false},
    {value: 10,status: false}
  ]

  listaNotice:any[]=[];
  loading = false;
  displayHome = true;
  cargarFormulario = false;
  displayMyDebt = false;
  constructor(private _api: NoticiasService){

  }

  buscarNoticia(parametro:any){
    this.loading=true;
    this._api.getNoticias(parametro).subscribe(result=>
      {
        console.log(result)
        this.loading=false;
        this.cargarFormulario = true;
        this.listaNotice = result.articles;
      }
      )
  }

  searchData(dato:any){
    //console.log(this.categoriaSeleccionada);

    switch (dato.typeSearch) {
      case 1:
        console.log("desde el 1 "+dato.id);
        break;
      case 2:
        console.log("desde el 2"+dato.id);
        break;
      default:
        break;
    }
    this.cargarFormulario=dato.id;
  }

  changeDisplay(dato:any){
    //console.log(this.categoriaSeleccionada);
    this.hideDisplay();
    this.statusDisplay[dato].status =true;
   
  }

  hideDisplay(){
    for (let index = 0; index < this.statusDisplay.length; index++) {
        this.statusDisplay[index].status =false;
    }
  }

}
