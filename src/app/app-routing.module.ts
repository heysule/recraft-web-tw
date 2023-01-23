import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryFiltersComponent } from './features/products/category-filters/category-filters.component';
import { ProductOverviewComponent } from './features/products/product-overview/product-overview.component';

const routes: Routes = [
  { path: 'products', component: CategoryFiltersComponent },
  { path: 'products/:id', component: ProductOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
