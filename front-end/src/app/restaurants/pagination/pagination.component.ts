import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'res-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter();

  
  currentPage: number = 1;
  pageCount: number;
  pages: number[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.pageCount = Math.ceil(this.totalItems/this.pageSize);
    this.pages = new Array(this.pageCount);
    this.currentPage = 1;
  }
  changePage(page){
    this.currentPage = page;
    this.pageChange.emit({"page" : this.currentPage});
  }

}
