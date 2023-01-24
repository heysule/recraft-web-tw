import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFiltersComponent } from './features/products/category-filters/category-filters.component';
import { ProductOverviewComponent } from './features/products/product-overview/product-overview.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: CategoryFiltersComponent },
  { path: 'products/:id', component: ProductOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
