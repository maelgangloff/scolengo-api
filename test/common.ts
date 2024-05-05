import type { MatcherFunction } from 'expect'
import Ajv from 'ajv'
import type { Config } from 'ts-json-schema-generator'
import { createGenerator } from 'ts-json-schema-generator'
import { inspect } from 'util'

const ajv = new Ajv({ allErrors: true })

const ajvConfig: Config = {
  path: 'src/**/*.ts',
  tsconfig: 'tsconfig.json'
}

const schemaGenerator = createGenerator({ ...ajvConfig, type: '*' })

const toMatchSchema: MatcherFunction<[type: string]> = (actual: any, type: string) => {
  const result = ajv.validate(schemaGenerator.createSchema(type), actual)

  return {
    message: () => `expected ${type + (result ? ' not ' : ' ')}to match schema: ${inspect(ajv.errors)}`,
    pass: result
  }
}

expect.extend({ toMatchSchema })

declare module 'expect' {
  interface AsymmetricMatchers {
    toMatchSchema: (type: string) => void
  }
  interface Matchers<R> {
    toMatchSchema: (type: string) => R
  }
}
