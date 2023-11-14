import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from '../product.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productList: ProductList = { products: [], total: 0, skip: 0, limit: 0 };
  p: number = 1;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<ProductList>('https://dummyjson.com/products')
      .subscribe((data) => {
        this.productList = data;
        console.log(this.productList);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.productList.products,
      event.previousIndex,
      event.currentIndex
    );
  }
}
