/* eslint-disable */
import { mockHttpEvent } from '@redwoodjs/testing/api'
import { handler } from './image'

describe('image serverless function', () => {
  it('generates a board image successfully', async () => {
    const httpEvent = mockHttpEvent({
      path: '0x64/abc123',
      // querytringParameters: {data:true}
    })

    const result = await handler(httpEvent)
    const body = result.body
    console.log(body)

    // expect(result.statusCode).toBe(200)
    // expect(body.boardBase64).toContain('=')
    // expect(body.quotient).toEqual(4)
  })
})
