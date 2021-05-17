import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BmwCarCatalog } from '../models/catalog';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.css']
})
export class CatalogTableComponent implements OnInit {

  public totalCount = 0;
  public catalog = [];
  private catalogSubscription: Subscription;
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getCatalogData();
  }

  private getCatalogData() {
    this.catalogSubscription = this.catalogService.getCatalog().subscribe((response: BmwCarCatalog) => {
      if (response.bwm_car_catalog_mock) {
        console.log(response.bwm_car_catalog_mock)
        this.catalog = response.bwm_car_catalog_mock;
        this.count();
      }
    }, (error) => {
      this.catalogSubscription.unsubscribe();
      console.log(error);
    })
  }

  private count() {
    this.totalCount = this.catalog.length;
  }

  ngOnDestroy() {
    this.catalogSubscription.unsubscribe();
  }

}
