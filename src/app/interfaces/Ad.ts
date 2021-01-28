import { CategoryDto, MiniAdDto, Self } from "./home-colletion-model-ads";

export interface Ad {
    id: number;
    title: string;
    price: number;
    addedAt: string;
    gov: string;
    city: string;
    categoryDto: CategoryDto;
    description: string;
    views: number;
    condition: string;
    brand: string;
    advertiserPhone: string;
    advertiserName: string;
    images: string[];
    advertiserId: number;
    relevantAdDto: MiniAdDto[];
    _links: Links;
}

export interface Links {
    self: Link;
    ads: Link;
    city: Link;
    gov: Link;
    category1: Link;
    category2: Link;
    category3: Link;
}

export interface Link{
    href:string
}