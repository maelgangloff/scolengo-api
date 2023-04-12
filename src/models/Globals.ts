export interface SkolengoResponse<Data, Links = never, Meta = never> {
    data: Data;
    links: Links;
    meta: Meta;
}

export interface Links {
    first: string;
    last: string;
    next: string;
}

export interface Meta {
    totalResourceCount: number;
}
