export interface Catalog {
    id: number;
    make_display: string;
    model_name: string;
    model_doors: string;
    model_year: string;
    price: number;
    body_type: string;
    fuel_type: string;
    exterior_color: string;
    new_used: string;
}

export interface BmwCarCatalog {
    bwm_car_catalog_mock: Catalog[];
}