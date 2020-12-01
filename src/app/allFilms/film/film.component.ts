import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film';

@Component({
  selector: 'nejd-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
@Input("m") t =Film;
  constructor() { }

  ngOnInit(): void {
  }

}
