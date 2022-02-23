import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  numeroMagico: number;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.productService.readByID(id).subscribe((product) => {
        this.product = product;
      });
    }

    this.numeroMagico = 2;
  }


  somaNumero(): void {
    this.product.price += this.product.price * 0.1;
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMensage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
