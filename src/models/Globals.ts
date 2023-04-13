export interface SkolengoResponse<Data, Links = never, Meta = never, Included = never> {
    data: Data;
    links?: Links;
    meta?: Meta;
    included?: Included;
}

export interface Links {
    first: string;
    last: string;
    next: string;
}

export interface Meta {
    totalResourceCount: number;
}
