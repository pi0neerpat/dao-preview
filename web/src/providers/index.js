import { ThemeContextProvider } from 'src/providers/theme'
import { ToastProvider } from 'src/providers/toast'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  // This will be automatically injected in to the App and Storybook

  return (
    <ThemeContextProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeContextProvider>
  )
}

export default AllContextProviders
