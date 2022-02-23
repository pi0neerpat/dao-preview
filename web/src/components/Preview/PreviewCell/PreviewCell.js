export const QUERY = gql`
  query Preview($contractAddr: String!, $chainId: String!, $type: String!) {
    dao(contractAddr: $contractAddr, chainId: $chainId, type: $type) {
      name
      profileImage
      daoHausUrl
      contractAddress
      chainId
      treasuryTotal
      memberCount
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ preview }) => {
  return <div>{JSON.stringify(preview)}</div>
}
