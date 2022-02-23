import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-crud-product",
  templateUrl: "./crud-product.component.html",
  styleUrls: ["./crud-product.component.scss"],
})
export class CrudProductComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navegateToProductCreate(): void {
    this.router.navigate(["product/create"]);
  }
}
