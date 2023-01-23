import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-toys-separate',
  templateUrl: './my-toys-separate.component.html',
  styleUrls: ['./my-toys-separate.component.css']
})
export class MyToysSeparateComponent {

  @Output() searchData = new EventEmitter<any>();

  dataTest:any[]=[
    {data: 1, name: "col1"},
    {data: 2, name: "col2"},
    {data: 3, name: "col3"},
    {data: 4, name: "col4"},
    {data: 5, name: "col5"}
  ]

  id_searchToys= "";

  searchMyToys(){
    
  }

}
