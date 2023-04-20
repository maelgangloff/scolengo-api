export type BaseObject<Type = string> = {
    id: string
    type: Type
}

export type BaseResponse<Attributes = undefined, Relationships = undefined, Type = string> = BaseObject<Type> & {
    attributes?: Attributes;
    relationships?: Relationships
}

export type SkolengoResponse<Data, Included = undefined> = {
    data: Data;
    links?: {
        first: string
        last: string
        next?: string
        prev?: string
    };
    meta?: {
        totalResourceCount: number;
    };
    included?: Included[];
}
