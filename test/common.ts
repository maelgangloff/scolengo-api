import type { MatcherFunction } from 'expect'
import Ajv from 'ajv'
import type { Config } from 'ts-json-schema-generator'
import { createGenerator } from 'ts-json-schema-generator'
import { inspect } from 'util'

const ajv = new Ajv()

const ajvConfig: Config = {
  path: 'src/**/*.ts',
  tsconfig: 'tsconfig.json'
}

const toMatchSchema: MatcherFunction<[type: string]> = (actual: any, type: string) => {
  const schema = createGenerator({ ...ajvConfig, type }).createSchema(type)
  const result = ajv.validate(schema, actual)

  if (result) {
    return {
      message: () => `expected ${type} not to match schema: ${inspect(ajv.errors)}`,
      pass: true
    }
  } else {
    return {
      message: () => `expected ${type} to match schema: ${inspect(ajv.errors)}`,
      pass: false
    }
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
