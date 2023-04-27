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
