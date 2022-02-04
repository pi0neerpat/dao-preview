import themeConfig from '../../config/tailwind.config'

const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const { theme } = themeConfig

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}

const useTheme = () => React.useContext(ThemeContext)

export { ThemeContextProvider, useTheme }
