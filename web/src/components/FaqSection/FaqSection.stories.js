import FaqSection from './FaqSection'

export const Base = () => {
  return (
    <div
      style={{
        width: 'calc(100vw - 230px)',
        maxWidth: 900,
        minHeight: '100vh',
      }}
    >
      <FaqSection />
    </div>
  )
}

export default { title: 'Components/FaqSection' }
