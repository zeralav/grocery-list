import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'groc-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() category: string;
  public items = [
    {
      category: 'Limpieza',
      name: 'Cloro',
      checked: false
    },
    {
      category: 'Limpieza',
      name: 'Detergente',
      checked: false
    },
    {
      category: 'Tecno',
      name: 'Mouse inalámbrico',
      checked: false
    },
    {
      category: 'Tecno',
      name: 'Keyboard',
      checked: false
    },
    {
      category: 'Tecno',
      name: 'Mouse Pad',
      checked: false
    },
    {
      category: 'Ropa',
      name: 'Jeans Talla M',
      checked: false
    },
  ];

  public selectedCategory = [];

  constructor() { }

  ngOnInit(): void {
  }

  public selectCategory(category) {
    this.selectedCategory = [];
    this.selectedCategory = this.items.filter((item) => item.category === category);
    console.log("Cats", this.selectedCategory, category);
  }

}
