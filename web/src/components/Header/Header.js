import { routes } from '@redwoodjs/router'

import Icon from 'src/components/Icon/Icon'
import Button from 'src/components/Button/Button'

const Header = () => {
  return (
    <div className={'header'}>
      <div className={'header__iconSearch'}>
        <div className="flex justify-center items-center">
          <div className="bg-black p-2 rounded-xl flex justify-center items-center">
            <div className="p-2 bg-white text-black rounded-br-none rounded-lg mr-2">
              DAO
            </div>
            <div>Preview</div>
          </div>
        </div>
      </div>
      <div className={'header__nav hidden lg:flex'}>
        <div className="flex-1 flex items-center">
          {/*<Button to={routes.faq()} size="large">
              <div className="flex items-center">
                <img src="/icons/HelpIcon.png" alt="" className="mr-2" />
                About
              </div>
            </Button>*/}
        </div>
      </div>
    </div>
  )
}

export default Header
