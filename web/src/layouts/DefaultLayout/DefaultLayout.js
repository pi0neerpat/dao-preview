import Header from 'src/components/Header'

import SiteFooter from './SiteFooter'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="relative mb-8 mt-4">
          <Header />
        </header>
        <div className="flex-grow">
          <div className="max-w-7xl mx-4 sm:mx-auto px-0 sm:px-0 sm:max-w-screen">
            {children}
          </div>
        </div>
        <SiteFooter className="self-end" />
      </div>
    </div>
  )
}

export default DefaultLayout
