import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CrudProductComponent } from "./views/crud-product/crud-product.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: CrudProductComponent },
  { path: "product/create", component: ProductCreateComponent },
  { path: "product/update/:id", component: ProductUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
