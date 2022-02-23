import { request } from 'graphql-request'
import fetch from 'node-fetch'
import { supportedChains } from 'src/lib/chains'
import { STATS, TREASURY } from './graphql'

const calcTotalUSD = (decimals, tokenBalance, usdVal) => {
  return (+tokenBalance / 10 ** decimals) * +usdVal
}

const fetchTokenData = async () => {
  try {
    const response = await fetch('https://data.daohaus.club/dao-tokens')
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

const doaProfile = async ({ contractAddr, chainId }) => {
  const profile = await fetch(
    `https://data.daohaus.club/dao/${contractAddr}`
  ).then((res) => res.json())

  return {
    name: profile[0].name,
    profileImage: `https://daohaus.mypinata.cloud/ipfs/${profile[0].avatarImg}`,
    daoHausUrl: `https://app.daohaus.club/dao/${chainId}/${contractAddr}`,
  }
}

const daoTreasury = async ({ contractAddr, chainId }) => {
  const endpoint = supportedChains[chainId].subgraph_url
  const network =
    supportedChains[chainId].networkAlt || supportedChains[chainId].network
  const tokenData = await fetchTokenData()
  const treasury = await request(endpoint, TREASURY, { contractAddr })
  const treasuryTotal = treasury.tokenBalances.reduce((sum, tokenBalance) => {
    const tokenMeta =
      tokenData[tokenBalance.token.tokenAddress]?.network === network &&
      tokenData[tokenBalance.token.tokenAddress]

    const usdVal = tokenMeta?.price || 0
    if (tokenBalance.tokenBalance) {
      return (
        calcTotalUSD(
          tokenBalance.token.decimals,
          tokenBalance.tokenBalance,
          usdVal
        ) + sum
      )
    }

    return sum
  }, 0)

  return { treasuryTotal }
}

const daoStats = async ({ contractAddr, chainId }) => {
  const endpoint = supportedChains[chainId].stats_graph_url

  const { moloch } = await request(endpoint, STATS, { contractAddr })

  return { memberCount: moloch.memberCount }
}

export const getDao = async ({ contractAddress, chainId }) => {
  const { name, profileImage, daoHausUrl } = await doaProfile({
    contractAddr,
    chainId,
  })
  const { treasuryTotal } = await daoTreasury({ contractAddr, chainId })
  const { memberCount } = await daoStats({ contractAddr, chainId })

  return {
    name,
    profileImage,
    daoHausUrl,
    contractAddress: contractAddr,
    chainId,
    treasuryTotal,
    memberCount,
  }
}
