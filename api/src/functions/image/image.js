import Sentry from 'src/lib/sentry'
import { chromium } from 'playwright-core'

export const handler = async (event) => {
  try {
    let width = 514
    let height = 171
    let address = '0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'
    let chainId = '0x64'
    if (event.queryStringParameters) {
      ;({ width, height, chainId, address } = event.queryStringParameters)
    }

    const browser = await chromium.launch()

    const page = await browser.newPage({
      viewport: {
        width: width,
        height: height,
      },
    })
    const url = `${process.env.APP_DOMAIN}/preview/${chainId}/${address}`

    await page.goto(url, {
      waitUntil: 'networkidle',
    })
    const buffer = await page.screenshot()
    await browser.close()
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
