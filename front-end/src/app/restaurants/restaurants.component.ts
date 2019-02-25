import { Component, OnInit } from '@angular/core';
import { RestaurantList } from './model/restaurant-list';
import { RestaurantsService } from './service/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'res-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
restaurantList : RestaurantList;
filter = {
  'priceFrom' : 1,
  'priceTo': 5,
  'cuisine': ""
};
  constructor(private rs: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
        this.filter.priceFrom = 1;
        this.filter.priceTo = 5;
        if(params['cuisine'] == 'all') {
          this.filter.cuisine = '';
        } else {
          this.filter.cuisine = params['cuisine'];
        }
        this.updateRestaurants();
      });
    }
  
    updateRestaurants(params?) {
      let httpParams = {};
      if(params) {
        httpParams = params;
      }
      httpParams['filter'] = this.filter;
      this.rs.getRestaurants(httpParams).subscribe(restaurants => this.restaurantList = restaurants);
    }
  }



