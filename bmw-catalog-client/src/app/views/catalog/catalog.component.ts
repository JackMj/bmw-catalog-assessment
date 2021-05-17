import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog_title = "BMW CAR CATALOG"
  constructor() { }

  ngOnInit(): void {
  }

}
