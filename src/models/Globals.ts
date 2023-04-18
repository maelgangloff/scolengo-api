export type BaseObject<Type = string> = {
    id: string
    type: Type
}

export type BaseResponse<Attributes = never, Relationships = never> = BaseObject & {
    attributes: Attributes;
    relationships?: Relationships
}

export type SkolengoResponse<Data, Included = never> = {
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
