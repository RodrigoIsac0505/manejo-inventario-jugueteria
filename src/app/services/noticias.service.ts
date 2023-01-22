import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { 

  }

  getNoticias(parametro:any) : Observable<any>{
    const URL = "https://newsapi.org/v2/top-headlines?country="+parametro.pais+"&category="+parametro.categoria+"&apiKey=4b5369f330ec46d1acb1ef29973310ec";
  
    return this.http.get(URL);
  }

}
