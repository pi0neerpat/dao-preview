import { Head } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import Icon from 'src/components/Icon/Icon'

export default () => (
  <>
    <Head>
      <title>Dao Preview | Page Not Found!</title>
    </Head>
    <main className="not-found">
      <section className="not-found--container">
        {/*  <div className="not-found--img">
          <img src="/no-go.png" className="h-auto w-full block" alt="" />
        </div>*/}
        <div className="not-found--content">
          <h1>Oops! Something is clearly wrong here...</h1>
          <p>The page you are looking for doesn&apos;t exist. (404)</p>
          <div className="not-found--content--go-home flex justify-center">
            <Button to={routes.home()}>
              <Icon name="dao_preview_full" height="50px" color="#fff" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  </>
)
