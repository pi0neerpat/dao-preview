export const schema = gql`
  type PreviewData {
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
    preview(
      contractAddress: String!
      chainId: String!
      type: String!
      yeeterId: String
    ): PreviewData! @skipAuth
  }
`
