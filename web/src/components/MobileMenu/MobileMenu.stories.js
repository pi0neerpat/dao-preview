import MobileMenu from './MobileMenu'

export const generated = () => {
  return (
    <MobileMenu trigger="Toggle">
      <div className="w-full h-60 flex items-center justify-center">
        <p>Contents go here</p>
      </div>
    </MobileMenu>
  )
}

export const isOpen = () => {
  return (
    <MobileMenu trigger="Toggle" isOpen>
      <div className="w-full h-60 flex items-center justify-center">
        <p>Contents go here</p>
      </div>
    </MobileMenu>
  )
}
export const leftToRight = () => {
  return (
    <MobileMenu trigger="Toggle" direction="ltr">
      <div className="w-full h-60 flex items-center justify-center">
        <p>Contents go here</p>
      </div>
    </MobileMenu>
  )
}

export default { title: 'Components/MobileMenu' }
