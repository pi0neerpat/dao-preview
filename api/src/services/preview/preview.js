import { getDao } from 'src/lib/dao'
import { getYeeter } from 'src/lib/yeeter'

export const preview = async ({ contractAddress, chainId, type, yeeterId }) => {
  if (type === 'YEETER') {
    return getYeeter({ contractAddress, chainId, yeeterId })
  } else if (type === 'DAO') {
    return getDao({ contractAddress, chainId })
  }
}
