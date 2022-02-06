export const STATS = gql`
  query Stats($contractAddr: String!) {
    moloch(id: $contractAddr) {
      memberCount
    }
  }
`

export const TREASURY = gql`
  query tokenBalances($contractAddr: String!) {
    tokenBalances(where: { guildBank: true, moloch: $contractAddr }) {
      id
      token {
        tokenAddress
        symbol
        decimals
      }
      tokenBalance
      guildBank
      moloch {
        id
        version
      }
    }
  }
`
