/* eslint-disable */
import { mockHttpEvent } from '@redwoodjs/testing/api'
import { handler } from './image'
import fs from 'fs'

describe('image serverless function', () => {
  it('generates successfully', async () => {
    const httpEvent = mockHttpEvent({
      path: '0x64/abc123',
      // querytringParameters: {data:true}
    })

    const result = await handler(httpEvent)
    console.log(result)

    const body = result.body
    console.log(body)
    fs.writeFile('deleteme.png', body, (e) => e && console.log(e))
  })
})
