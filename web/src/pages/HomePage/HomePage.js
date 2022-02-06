import { Head } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useLazyQuery } from '@apollo/client'
import { deprecateDirectCall } from '@react-spring/shared'

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
const HomePage = () => {
  const [dao, { loading, data }] = useLazyQuery(QUERY)

  const onSubmit = async (data) => {
    const value = await dao({ variables: data })
    console.log(value)
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* TODO: remaining home page content */}

      <div className="flex justify-center items-center">
        <div className="bg-black p-2 rounded-xl flex justify-center items-center">
          <div className="p-2 bg-white text-black rounded-br-none rounded-lg mr-2">
            DAO
          </div>
          <div>Preview</div>
        </div>
      </div>
      <Form onSubmit={onSubmit} className="mb-4">
        <div className="flex items-center">
          <TextField
            name="chainId"
            placeholder="Chain ID"
            className="rounded text-sm p-2 mr-3 bg-gray-900 h-10"
            defaultValue={'0x64'}
          />
          <TextField
            name="contractAddr"
            placeholder="Contract Address"
            className="rounded text-sm p-2 mr-3  bg-gray-900 h-10"
            defaultValue={'0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'}
          />
          <Submit className="text-sm bg-black rounded px-2 mr-3 font-bold h-10">
            Preview
          </Submit>
          {loading && (
            <div className="h-5 w-5">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </Form>

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
                <div className="text-lg">{data.dao.memberCount}</div>
                <div className="text-lg">{data.dao.contractAddress}</div>
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  )
}

export default HomePage
