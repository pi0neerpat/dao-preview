import Sentry from 'src/lib/sentry'

export const handler = async (event) => {
  try {
    let width = 514
    let height = 171
    let address = '0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'
    let chainId = '0x64'
    if (event.querytringParameters) {
      ;({ width, height } = event.querytringParameters)
    }
    console.log(event.path)
    if (event.path) {
      ;[_, __, chainId, path] = event.path
    }
    console.log(chainId)
    var query = new URLSearchParams()

    query.append(
      'url',
      `${process.env.APP_DOMAIN}/preview/${chainId}/${address}`
    )
    width && query.append('width', width)
    height && query.append('height', height)

    const buffer = await fetch(
      'https://headless-screenshot.vercel.app/api/?' + query.toString()
    )
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'image/jpeg' },
      body: buffer,
    }
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log(e)
    // Sentry.captureException(e)
    return {
      statusCode: 500, // Always return 200
      body: e,
    }
  }
}
