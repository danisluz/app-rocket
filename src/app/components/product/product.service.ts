import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  //Property
  baseUrl = "http://localhost:3001/products";

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}

  showMensage(msg: string, duration?: number) {
    // if ternario - duration ? duration : 3000,
    this._snackBar.open(msg, "X", {
      duration: duration ? duration : 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
    console.log(
      duration == undefined ? "Duration Undefined" : `duration ${duration}`
    );
    console.log(!duration ? "Duration Undefined" : `duration ${duration}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readByID(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  // (recebe) :-> Retorna
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id?: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.delete<Product>(url);
  }
}
