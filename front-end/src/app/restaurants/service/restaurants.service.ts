import {map} from 'rxjs/internal/operators';
import {HttpParams, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list';
import { MenuList } from '../model/menu-list';



const baseUrl = "http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {


  constructor(private http: HttpClient) { }

  getRestaurants(params?: any): Observable<RestaurantList> {
 let queryParams = {};
 if(params){
  let filter = {}
  filter['priceFrom'] = params.filter && params.filter.priceFrom && params.filter.priceFrom.toString() || '1';
  filter['priceTo'] = params.filter && params.filter.priceTo && params.filter.priceTo.toString() || '5';
  filter['cuisine'] = params.filter && params.filter.cuisine && params.filter.cuisine.toString() || '';

  queryParams = {
    
    params : new HttpParams()

    .set('sort', params.sort || "rating")
    .set('sortDirection', params.sortDirection || "desc")
    .set('page', params.page && params.page.toString() || "1")
    .set('pageSize', params.pageSize && params.pageSize.toString() || "12")
    .set('filter', JSON.stringify(filter))
  }
    
  }
  return this.http.get<RestaurantList>(baseUrl, queryParams).pipe(map(res => {
    return new RestaurantList(res);
  }));
}

getMenu(restaurantId: number): Observable<MenuList>{
  return this.http.get<RestaurantList>("http://localhost:3000/api/restaurants/" + restaurantId + "/menus").pipe(map(res =>{return new MenuList(res);
    }));


}
}

