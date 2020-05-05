import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'groc-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Output() eventClick = new EventEmitter();

  categories: string[] = ['Limpieza', 'Ropa', 'Tecno'];

  constructor() { }

  ngOnInit(): void {
  }

  
	selectCategory(category: string) {
    this.eventClick.emit(category);
  }

}
