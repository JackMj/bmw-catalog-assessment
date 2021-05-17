import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './views/catalog/catalog.component';
import { NavComponent } from './views/nav/nav/nav.component'
import { CatalogTableComponent } from './views/catalog/catalog-table/catalog-table.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    NavComponent,
    CatalogTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
