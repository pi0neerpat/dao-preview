import { CardSkeleton, RowsSkeleton } from './LoadingSkeleton'

export const cardSkeleton = () => {
  return <CardSkeleton />
}

export const rowsSkeleton = () => {
  return <RowsSkeleton rowCount={6} />
}

export const loadingTableExample = () => {
  return (
    <div
      className="skeleton-container"
      style={{
        backgroundColor: '#272522',
        width: '527px',
        height: '500px',
        borderRadius: '12px',
        textAlign: 'center',
      }}
    >
      <div
        className="header-container pt-5 pl-5 pb-3"
        style={{ display: 'flex' }}
      >
        <p style={{ fontSize: '16px', paddingRight: '10px' }}>Games</p>
        <p
          style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          Loading
        </p>
      </div>
      <div
        className="skeleton-row-container"
        style={{
          position: 'relative',
          overflowX: 'hidden',
          overflowY: 'auto',
          height: '430px',
          width: '495px',
          left: '16px',
        }}
      >
        <RowsSkeleton height={56} rowCount={50} />
      </div>
    </div>
  )
}

export default { title: 'Components/LoadingSkeleton' }
