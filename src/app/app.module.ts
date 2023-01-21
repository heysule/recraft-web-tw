import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/components/navigation/navigation.component';
import { ProductOverviewComponent } from './features/products/product-overview/product-overview.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ProductOverviewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
