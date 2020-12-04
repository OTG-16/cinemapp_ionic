import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas=[]; /*[
    {
      "titulo": "Lo imposible",
      "ano": 2012,
      "director": "Juan Antonio Bayona", 
      "imagen": "https://i.ytimg.com/vi/3l56GMvGGn4/maxresdefault.jpg",
  
    },
    {
      "titulo": "30 minutos o menos",
      "ano": 2011,
      "director": "Ruben Fleischer", 
      "imagen": "https://lh3.googleusercontent.com/gjKU7HNhI6_hT2S6XzB9zRx2xXX905Wy8wvssN1kOZTpeO0b5_7T6VZdZRxT_boqacFj",
  
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}
    
  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas=peliculas;
    });
    //this.peliculasService.getPeliculas();
  }
  
}
