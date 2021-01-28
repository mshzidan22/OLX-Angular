

export interface SearchAds {
    _embedded: Embedded;
    _links: Links2;
    page: Page;
}

export interface CategoryDto {
    categoryLv1: string;
    categoryLv2: string;
    categoryLv3: string;
}

export interface Self {
    href: string;
}

export interface Ads {
    href: string;
}

export interface Links {
    self: Self;
    ads: Ads;
}

export interface EntityModel {
    id: number;
    title: string;
    img: string;
    price: number;
    addedAt: string;
    gov: string;
    city: string;
    categoryDto: CategoryDto;
    _links: Links;
}

export interface Embedded {
    entityModels: EntityModel[];
}

export interface Self2 {
    href: string;
}

export interface Links2 {
    self: Self2;
}

export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}



