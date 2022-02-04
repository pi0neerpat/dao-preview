import ReactInfiniteScrollComponent from 'react-infinite-scroll-component'
import ScrollToTop from 'react-scroll-to-top'
import Icon from 'src/components/Icon'

const InfiniteScroll = ({
  children,
  onLoadMore,
  count,
  page,
  perPage,
  loader,
  dataLength,
}) => {
  const hasMore = perPage * (page + 1) < count
  return (
    <>
      <ScrollToTop
        smooth
        top={400}
        style={{ left: 40 }}
        component={
          <div className="flex justify-center">
            <Icon name="arrow_up" size={16} />
          </div>
        }
      />
      <ReactInfiniteScrollComponent
        style={{ overflow: 'visible' }}
        dataLength={dataLength}
        next={onLoadMore}
        hasMore={hasMore}
        scrollThreshold={0.8}
        loader={loader || <h4>Loading...</h4>}
        endMessage={
          <div className="mt-8 rw-text-center">
            <h3>That&apos;s everything</h3>
          </div>
        }
      >
        {children}
      </ReactInfiniteScrollComponent>
    </>
  )
}

export default InfiniteScroll
