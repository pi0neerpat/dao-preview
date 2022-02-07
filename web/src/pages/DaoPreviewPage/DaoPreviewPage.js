import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'
import { trimAddress } from 'src/utils/helpers'

const QUERY = gql`
  query Dao($contractAddr: String!, $chainId: String!) {
    dao(contractAddr: $contractAddr, chainId: $chainId) {
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

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const DaoPreviewPage = ({ chainId, contractAddr }) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { chainId, contractAddr },
  })

  if (loading) return 'loading'
  if (error) return 'error'

  return (
    <>
      <MetaTags title="DaoPreview" description="DaoPreview page" />

      {data && (
        <div>
          <a href={data.dao.daoHausUrl}>
            <div className="bg-black rounded-xl flex">
              <img
                className="rounded-lg rounded-br-none rounded-tr-none"
                src={data.dao.profileImage}
                alt="Dao Profile"
              />
              <div className="p-4">
                <div className="font-bold text-xl">{data.dao.name}</div>
                <div className="text-lg">
                  {formatter.format(data.dao.treasuryTotal)}
                </div>
                <div className="text-lg">{data.dao.memberCount} Members</div>
                <div className="text-lg">
                  {trimAddress(data.dao.contractAddress)}
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  )
}

export default DaoPreviewPage
