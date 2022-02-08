import { Head } from '@redwoodjs/web'
import { useState, useEffect, renderToStaticMarkup } from 'react'
import ReactDOMServer from 'react-dom/server'

import { toast } from '@redwoodjs/web/toast'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useLazyQuery } from '@apollo/client'
import ClipboardJS from 'clipboard'

import FeaturedDaos from 'src/components/FeaturedDaos'
import NetworkDropdown from 'src/components/NetworkDropdown'

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
  const [values, setValues] = useState({ chainId: null, address: null })
  useEffect(() => {
    const clipboard = new ClipboardJS('#copyButton')

    clipboard.on('success', function () {
      toast.success('Preview copied')
    })
    return () => {
      clipboard.destroy()
    }
  }, [])

  const onSubmit = async (data) => {
    setValues({ chainId: data.chainId, contractAddr: data.contractAddr })
    await dao({ variables: data })
  }

  const buttonSnippet = `<a href="${data?.dao?.daoHausUrl}">
  <img src="${process.env.APP_DOMAIN}/api/canvas?chainId=${values.chainId}&address=${values.contractAddr}" alt="${data?.dao?.name}" />
</a>`
  const imageSnippet = `${process.env.APP_DOMAIN}/api/canvas?chainId=${values.chainId}&address=${values.contractAddr}`

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="py-8 sm:py-8 ">
        <div className="relative sm:py-8">
          <div className="mx-auto max-w-md sm:max-w-3xl  lg:max-w-7xl">
            <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20 bg-gray-900">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full text-black"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-indigo-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-indigo-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative ">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    DAO Preview
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                    Generate once. Post anywhere. Always up to date.
                  </p>
                </div>

                <Form onSubmit={onSubmit} className="mt-12 mx-auto">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-5">
                      <label htmlFor="chainId" className="sr-only">
                        Network
                      </label>
                      <NetworkDropdown name="chainId" defaultValue={'0x64'} />
                    </div>
                    <div className="col-span-5">
                      <label htmlFor="contractAddr" className="sr-only">
                        Contract Address
                      </label>
                      <TextField
                        id="contractAddr"
                        name="contractAddr"
                        placeholder="Contract Address"
                        className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        defaultValue={
                          '0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'
                        }
                      />
                    </div>
                    <div className="col-span-2">
                      <Submit className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10">
                        {!loading ? (
                          'Preview'
                        ) : (
                          <div className="flex items-center justify-center">
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
                            <div className="mr-3">Generating</div>
                          </div>
                        )}
                      </Submit>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data && !loading && <div className="mb-4">Preview</div>}
      <div className="grid grid-cols-2 gap-2">
        <div>
          {values.chainId !== null &&
          values.contractAddr !== null &&
          !loading ? (
            <img
              src={`${process.env.APP_DOMAIN}/api/canvas?chainId=${values.chainId}&address=${values.contractAddr}`}
              alt="canvas"
            />
          ) : null}
        </div>
        <div>
          {data && !loading && (
            <>
              <div className="p-4 bg-black rounded-lg">
                <p>Image</p>
                <textarea
                  rows="2"
                  className="bg-gray-900 text-white text-sm w-full p-4 rounded pointer-events-none"
                  id="imageSnippet"
                  value={imageSnippet}
                  readOnly
                >
                  {imageSnippet}
                </textarea>
                <button
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  id="copyButton"
                  data-clipboard-action="copy"
                  data-clipboard-target="#imageSnippet"
                >
                  Copy
                </button>
              </div>
              <div className="p-4 bg-black rounded-lg">
                <p>Button</p>
                <textarea
                  rows="5"
                  className="bg-gray-900 text-white text-sm w-full p-4 rounded pointer-events-none"
                  id="buttonSnippet"
                  value={buttonSnippet}
                  readOnly
                >
                  {buttonSnippet}
                </textarea>
                <button
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  id="copyButton"
                  data-clipboard-action="copy"
                  data-clipboard-target="#buttonSnippet"
                >
                  Copy
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <FeaturedDaos />
      <div className="flex-column items-center mt-12 mx-auto align-center">
        <img src="/ethglobal.svg" />
        <a
          className=""
          href="https://showcase.ethglobal.com/roadtoweb3/dao-preview"
        >
          Road to Web3 2022 Submission
        </a>
      </div>
    </>
  )
}

export default HomePage
