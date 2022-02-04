import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import rateLimit from './rateLimit'

describe('rateLimit directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(rateLimit.schema).toBeTruthy()
    expect(getDirectiveName(rateLimit.schema)).toBe('rateLimit')
  })

  it('has a rateLimit throws an error if validation does not pass', () => {
    const mockExecution = mockRedwoodDirective(rateLimit, {})

    expect(mockExecution).toThrowError('Implementation missing for rateLimit')
  })
})
