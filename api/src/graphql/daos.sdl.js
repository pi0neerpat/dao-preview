export const schema = gql`
  type Dao {
    id: String!
    name: String
    profileImage: String
    daoHausUrl: String
    contractAddress: String
    chainId: String
    treasuryTotal: String
    memberCount: Int
  }

  type Query {
    dao(contractAddr: String!, chainId: String!): Dao! @skipAuth
  }
`
