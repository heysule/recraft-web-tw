import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/components/navigation/navigation.component';
import { ProductOverviewComponent } from './features/products/product-overview/product-overview.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductOverviewComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
