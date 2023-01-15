import { Component, OnInit } from '@angular/core';
import {Film} from "../Model/Film";
import {FilmServiceService} from "../Services/film-service.service";
import {UserServiceService} from "../Services/user-service.service";

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.css']
})
export class FavoriComponent implements OnInit {

  films:Film[] = [];
  constructor(private filmService:FilmServiceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getFav().then(async favs_ids => {
      this.films = await this.filmService.getFavori(favs_ids)
    })
  }


}
