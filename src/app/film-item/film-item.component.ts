import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../Model/Film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() film !: Film;
  @Input() index !: number;

  getColor(index:number){
    if (index%2==0) return '#1e81b0'
      return '#abdbe3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
