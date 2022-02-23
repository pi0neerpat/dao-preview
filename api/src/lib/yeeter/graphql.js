export const PROJECTS_DETAIL_SHAMAN_QUERY = gql`
  query shamans($contractAddr: String!) {
    shamans(
      where: { shamanType: "yeeter", molochAddress: $contractAddr }
      orderBy: createdAt
      orderDirection: asc
    ) {
      id
      createdAt
      shamanAddress
      molochAddress
      details
      shamanType
      yeeterConfig {
        id
        maxTarget
        raiseEndTime
        raiseStartTime
        maxUnits
        pricePerUnit
      }
    }
  }
`
