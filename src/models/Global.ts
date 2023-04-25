export interface BaseObject<Type = string> {
  id: string
  type: Type
}

export type BaseResponseAttributes<Attributes, Type> = BaseObject<Type> & {
  attributes: Attributes
}

export type BaseResponseRelationships<Relationships, Type> = BaseObject<Type> & {
  relationships: Relationships
}

export type BaseResponse<Attributes, Relationships, Type> =
  & BaseResponseAttributes<Attributes, Type>
  & BaseResponseRelationships<Relationships, Type>

export interface SkolengoResponse<Data, Included> {
  data: Data
  links?: {
    self?: string
    first: string
    last: string
    next?: string
    prev?: string
  }
  meta?: {
    totalResourceCount: number
  }
  included: Included[]
}

export type SkolengoResponseData<Data> = Omit<SkolengoResponse<Data, never>, 'included'>
