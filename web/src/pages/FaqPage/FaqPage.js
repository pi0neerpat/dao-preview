import FaqSection from 'src/components/FaqSection/FaqSection'
import about from './about'
import faq from './faq'

const FaqPage = () => {
  return (
    <div style={{ maxWidth: '85%', margin: 'auto' }}>
      <FaqSection title="About" questionList={about} />
      <FaqSection title="FAQ's" questionList={faq} />
    </div>
  )
}

export default FaqPage
