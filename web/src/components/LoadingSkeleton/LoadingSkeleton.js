import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const CardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#272522" highlightColor="#21201D">
      <Skeleton className="skeleton-card" count={1} />
    </SkeletonTheme>
  )
}

export const SaleSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#272522" highlightColor="#21201D">
      <Skeleton className={`h-[108px] w-[396px] rounded-xl`} count={1} />
    </SkeletonTheme>
  )
}

export const RowsSkeleton = ({
  rowCount,
  maxHeight,
  maxWidth,
  borderRadius,
  marginBottom,
}) => {
  return (
    <SkeletonTheme baseColor="#312E2B" highlightColor="#272522">
      <Skeleton
        className="skeleton-rows"
        style={{ maxHeight, maxWidth, borderRadius, marginBottom }}
        count={rowCount}
        containerClassName="skeleton-container"
        inline={true}
      />
    </SkeletonTheme>
  )
}
