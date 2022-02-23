import ClipboardJS from 'clipboard'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Preview = ({ isLoading, preview }) => {
  const buttonSnippet = `<a href="${data?.dao?.daoHausUrl}">
  <img src="${process.env.APP_DOMAIN}/api/canvas?chainId=${values.chainId}&address=${values.contractAddr}" alt="${data?.dao?.name}" />
</a>`
  const imageSnippet = `${process.env.APP_DOMAIN}/api/canvas?chainId=${values.chainId}&address=${values.contractAddr}`

  React.useEffect(() => {
    const clipboard = new ClipboardJS('#copyButton')

    clipboard.on('success', function () {
      toast.success('Preview copied')
    })
    return () => {
      clipboard.destroy()
    }
  }, [])

  return (
    <>
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
    </>
  )
}

export default Preview
