import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'res-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() value: number;
@Input() iconFull : string;
@Input() iconEmpty : string;
  constructor() { }

  ngOnInit() {
  }

}
