import type { MatcherFunction } from 'expect'
import type { Schema } from 'ajv'
import Ajv from 'ajv'
import type { Config } from 'ts-json-schema-generator'
import { createGenerator } from 'ts-json-schema-generator'
import { inspect } from 'util'

const ajv = new Ajv({ allErrors: true })

const ajvConfig: Config = {
  path: 'src/**/*.ts',
  tsconfig: 'tsconfig.json'
}

export const createSchema = (type: string): Schema => createGenerator({ ...ajvConfig, type }).createSchema(type)

const toMatchSchema: MatcherFunction<[type: string, schema: Schema]> = (actual: any, type: string, schema: Schema) => {
  const result = ajv.validate(schema, actual)

  return {
    message: () => `expected ${type + (result ? ' not ' : ' ')}to match schema: ${inspect(ajv.errors)}`,
    pass: result
  }
}

expect.extend({ toMatchSchema })

declare module 'expect' {
  interface AsymmetricMatchers {
    toMatchSchema: (type: string, schema: Schema) => void
  }
  interface Matchers<R> {
    toMatchSchema: (type: string, schema: Schema) => R
  }
}
