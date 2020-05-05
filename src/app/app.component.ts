import { Component, ViewChild } from '@angular/core';
import { ItemsComponent } from '../app/components/items/items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ItemsComponent) child: ItemsComponent;
  title = 'groceries';
  selectedCategory = '';

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.child.selectCategory(this.selectedCategory);
  }
}
