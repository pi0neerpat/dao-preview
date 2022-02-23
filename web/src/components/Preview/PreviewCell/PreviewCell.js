import Preview from 'src/components/Preview/Preview'

export const QUERY = gql`
  query Preview($contractAddress: String!, $chainId: String!, $type: String!, yeeterId: Int) {
    preview($contractAddress: $contractAddress, chainId: $chainId, type: $type, yeeterId: $yeeterId) {
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

export const Loading = () => <Preview isLoading />

export const Empty = () => <div>Not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ preview }) => {
  return <Preview preview={preview} />
}
