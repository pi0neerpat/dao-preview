import Header from './Header'

export const generated = () => {
  return <Header />
}

export const loggedIn = () => {
  mockCurrentUser({
    username: 'Bill',
    address: '0xcb81A76a565aC4870EDA5B0e32c5a0D2ec734174',
  })

  return <Header />
}

export const mobile = () => {
  return (
    <div style={{ width: `350px` }}>
      <Header />
    </div>
  )
}

export default { title: 'Components/Header' }
