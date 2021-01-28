export interface HomeColletionModelAds {
    _embedded: Embedded;
    _links: Links;
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

export interface MiniAdDto {
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
    miniAdDtoes: MiniAdDto[];
}

// export interface Links2 {
// }