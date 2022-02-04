import Button from 'src/components/Button'

const Pagination = ({ count, page, perPage, onChangePage }) => {
  const items = []
  const addButton = ({ text, page }) =>
    items.push(
      <Button key={page} onClick={() => onChangePage(page)}>
        {text}
      </Button>
    )

  const totalPages = Math.ceil(count / perPage)
  if (page > 10) addButton({ text: '<<', page: page - 10 })
  if (page > 1) addButton({ text: '<', page: page - 1 })
  items.push(
    <div key={page} className="inline-block mx-1 py-1 px-3 ">
      {page}
    </div>
  )
  if (page < totalPages) addButton({ text: '>', page: page + 1 })
  if (page < totalPages - 10) addButton({ text: '>>', page: page + 10 })
  return <div className="text-lg font-semibold">{items}</div>
}

export default Pagination
