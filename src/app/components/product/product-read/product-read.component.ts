import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor( private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productsInilize();
  }

  productsInilize(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  deleteProduct(id: number): void {
    console.log("Delete", id);
    this.productService.delete(id).subscribe(() => {
      this.productsInilize();
      this.productService.showMensage("Produto excluido!", 3000);
    });
  }

}
