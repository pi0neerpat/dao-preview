/* eslint-disable */
import { mockHttpEvent } from '@redwoodjs/testing/api'
import { handler } from './image'
import fs from 'fs'

describe('image serverless function', () => {
  it('generates successfully', async () => {
    const httpEvent = mockHttpEvent({
      path: '0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f',
      // querytringParameters: { width: 100, height: 100 },
    })

    const result = await handler(httpEvent)
    console.log(result)

    const body = result.body
    console.log(body)
    fs.writeFile('deleteme.png', body, (e) => e && console.log(e))
  })
})
