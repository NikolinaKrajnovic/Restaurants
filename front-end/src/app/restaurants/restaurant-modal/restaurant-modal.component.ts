import { Restaurant } from './../model/restaurant';
import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'res-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.css']
})
export class RestaurantModalComponent implements OnInit {
 @Input() restaurant: Restaurant;
 menu: Menu;
  constructor(private rs :RestaurantsService) { }

  ngOnInit() {
this.rs.getMenu(this.restaurant._id).subscribe(res => {this.menu = res.results[0];})
}
  }


