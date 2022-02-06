import Sentry from 'src/lib/sentry'

export const handler = async (event) => {
  try {
    const { dataOnly } = (event.querytringParameters = {})
    const path = event.path
    const [chain, dao] = path.split('/')
    console.log(chain)
    console.log(dao)

    const base64 = 'data:'

    if (dataOnly) {
      return {
        statusCode: 200,
        body: base64,
      }
    }
    const buffer = Buffer.from(base64.split('base64,')[1], 'base64')
    return {
      headers: { 'Content-Type': 'image/jpeg' },
      statusCode: 200,
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
