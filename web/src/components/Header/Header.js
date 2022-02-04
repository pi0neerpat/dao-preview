import { routes } from '@redwoodjs/router'

import Icon from 'src/components/Icon/Icon'
import Button from 'src/components/Button/Button'

const Header = () => {
  return (
    <div className={'header'}>
      <div className={'header__iconSearch'}>
        <Button to={routes.home()} className="mr-4">
          <Icon name="dao_preview_full" height="35px" color="#fff" />
        </Button>
      </div>
      <div className={'header__nav hidden lg:flex'}>
        <div className="flex-1 flex items-center">
          <div>
            <Button to={routes.faq()} size="large">
              <div className="flex items-center">
                <img src="/icons/HelpIcon.png" alt="" className="mr-2" />
                About
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
