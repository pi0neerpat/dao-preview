import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './canvas'

describe('canvas function', () => {
  it('Should respond with 200', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        chainId: '0x64',
        contractAddress: '0xb152b115c94275b54a3f0b08c1aa1d21f32a659a',
      },
    })

    const response = await handler(httpEvent, null)
    const { data } = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(data).toBe('canvas function')
  })

  // You can also use scenarios to test your api functions
  // See guide here: https://redwoodjs.com/docs/testing#scenarios
  //
  // scenario('Scenario test', async () => {
  //
  // })
})
