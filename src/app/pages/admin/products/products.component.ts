import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isSidePanelVisible: boolean= false;
  productObj: any = {
  }
  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}
