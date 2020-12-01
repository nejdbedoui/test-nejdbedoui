import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nejd-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
@Input("m") t :Films[];
  constructor() { }

  ngOnInit(): void {
  }

}
