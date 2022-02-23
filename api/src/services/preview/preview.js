import { getDao } from 'src/lib/dao'

export const preview = async ({ contractAddress, chainId, type, yeeterId }) => {
  if (type === 'YEETER') {
    return getYeeter({ contractAddress, chainId, yeeterId })
  } else if (type === 'DAO') {
    return getDao({ contractAddress, chainId })
  }
}
