import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../Model/Film';
import { FilmServiceService } from '../Services/film-service.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {
  id:string=this.route.snapshot.params['id'];;
  film !: Film;
  constructor(private filmService:FilmServiceService,private route:ActivatedRoute) { 
    this.filmService.getFilm(this.id).then((data:any)=>{
      console.log(data);
      this.film=data;
  })}


  ngOnInit(): void {
  }

}
