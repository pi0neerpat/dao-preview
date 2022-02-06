import Sentry from 'src/lib/sentry'
import { chromium } from 'playwright-core'

export const handler = async (event) => {
  try {
    const { width, height } = (event.querytringParameters = {})
    const path = event.path
    const [chain, dao] = path.split('/')

    const browser = await chromium.launch()
    // const context = await browser.newContext()

    const page = await browser.newPage({
      viewport: {
        width: width || 1200,
        height: height || 630,
      },
    })

    // Generate the full URL out of the given path (GET parameter)
    const url = 'https://duckduckgo.com'
    await page.goto(url)
    const buffer = await page.screenshot()
    await browser.close()
    return {
      statusCode: 500, // Always return 200
      body: buffer,
    }
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log(e)
    Sentry.captureException(e)
    return {
      statusCode: 500, // Always return 200
      body: {
        message: 'Internal server error',
      },
    }
  }
}
