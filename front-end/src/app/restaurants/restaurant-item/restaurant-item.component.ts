import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

@Component({
  selector: 'res-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
@Input() restaurant : Restaurant;
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openModal(restaurant) {
    const modalRef = this.modal.open(RestaurantModalComponent);
    modalRef.componentInstance.restaurant = restaurant;
  }

}
