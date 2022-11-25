import { Component, OnInit, Output } from '@angular/core';
import { Film } from '../Model/Film';
import { FilmItemComponent } from '../film-item/film-item.component';
import { FilmServiceService } from '../Services/film-service.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  films!:Film[];
  search:String="";

  constructor(private filmService:FilmServiceService) { 
  }
  setSearch(text:String){
    this.search=text;
    if(this.search==="") this.filmService.getAllFilm().then((data:any)=>{
      this.films=data.results;
  })
    else this.filmService.searchFilm(this.search).then((data:any)=>{
    this.films=data.results;
})
  }

  ngOnInit(): void {
    this.setSearch("");
    
  }
  

}
