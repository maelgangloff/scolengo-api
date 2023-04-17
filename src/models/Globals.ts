export interface Included<Attributes = never, Relationships = never> {
    id: string;
    type: string;
    attributes: Attributes;
    relationships?: Relationships
}

export interface SkolengoResponse<Data, Included = never> {
    data: Data;
    links?: {
        first: string;
        last: string;
        next?: string;
    };
    meta?: {
        totalResourceCount: number;
    };
    included?: Included[];
}
