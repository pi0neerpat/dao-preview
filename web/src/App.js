// import * as Sentry from '@sentry/browser'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import AllContextProviders from 'src/providers'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.scss'

/* eslint-disable no-console */
/* eslint-disable no-irregular-whitespace */
console.log(
  '%c👋 Howdy!',
  'color:green;font-family:sans-serif;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold'
)
/* eslint-enable no-irregular-whitespace */
/* eslint-enable no-console */

const SentryInjector = () => {
  const { currentUser } = useAuth || null
  try {
    // Sentry.init({
    //   dsn: 'https://',
    //   beforeSend(event, hint) {
    //     console.log(event)
    //     // Check if it is an exception, and if so, show the report dialog
    //     if (event.exception) {
    //       Sentry.showReportDialog({ eventId: event.event_id })
    //     }
    //     return event
    //   },
    // })
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.log(e)
  }
  if (currentUser) {
    // Matomo user
    // _paq.push(['setUserId', currentUser.username])
    // Sentry.setUser(currentUser)
  }
  return null
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <SentryInjector />
      <RedwoodApolloProvider>
        <AllContextProviders>
          <Routes />
        </AllContextProviders>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
