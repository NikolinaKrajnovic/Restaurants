import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RatingComponent } from './restaurants/rating/rating.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { RestaurantModalComponent } from './restaurants/restaurant-modal/restaurant-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SidebarComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    RatingComponent,
    PaginationComponent,
    RestaurantModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [RestaurantModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
