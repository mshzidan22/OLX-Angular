export interface UserAd {
    id: number;
    title: string;
    addedAt: string;
    price: number;
    views?: number;
    links: Link[];
}


export interface Link {
    rel: string;
    href: string;
}
