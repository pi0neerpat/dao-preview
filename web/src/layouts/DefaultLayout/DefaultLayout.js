import Header from 'src/components/Header'

import SiteFooter from './SiteFooter'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col mx-4 min-h-screen">
        <header className="relative mb-8">
          <Header />
        </header>
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto sm:mx-auto px-0 sm:px-0 sm:max-w-screen">
            <div className="w-full">{children}</div>
          </div>
        </div>
        <SiteFooter className="self-end" />
      </div>
    </div>
  )
}

export default DefaultLayout
