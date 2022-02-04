import themeConfig from '../../config/tailwind.config'
import config from 'src/global.config'

export const isBrowser = typeof window !== 'undefined'
export const isProduction = process.env.NODE_ENV === 'production'
export const isMobile =
  isBrowser && window.matchMedia('(max-width: 767px)').matches

export const getBlockExplorerUrl = ({ address, txHash }) => {
  if (address) return config.BLOCK_EXPLORER_BASE_URL + 'address/' + address
  if (txHash) return config.BLOCK_EXPLORER_BASE_URL + 'tx/' + txHash
}

export const trimAddress = (address) => {
  if (typeof address !== 'string') return ''
  return address.substring(0, 5) + '...' + address.substring(38, 42)
}

export const isHexAddress = (address) => {
  return /^(0x)?[0-9a-f]{40}$/i.test(address)
}

export const trimString = (string, maxLength) => {
  if (!string) return string
  if (maxLength < 1) return string
  if (string.length <= maxLength) return string
  if (maxLength == 1) return `${string.substring(0, 1)}...`

  const midpoint = Math.ceil(string.length / 2)
  const toremove = string.length - maxLength
  const lstrip = Math.ceil(toremove / 2)
  const rstrip = toremove - lstrip

  return `${string.substring(0, midpoint - lstrip)}...${string.substring(
    midpoint + rstrip
  )}`
}

export const getColorFromTheme = (color) => {
  const { theme } = themeConfig
  const isNested = color.includes('.')
  const isRgb = color.includes('rgb')

  if (isRgb) return color
  if (isNested) {
    const colorsArr = color.split('.')
    return theme.colors[colorsArr[0]][colorsArr[1]]
  } else {
    return theme.colors[color] ? theme.colors[color] : color
  }
}

export const debounce = (func, delay) => {
  let timeout
  return (...params) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(params)
    }, delay)
  }
}

export const formatDate = (rawString) => {
  const date = new Date(rawString)
  let options = { month: 'short' }
  const month = new Intl.DateTimeFormat('en-US', options).format(date)
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day} ${year}`
}
