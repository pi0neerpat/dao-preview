const FaqItem = ({ question, answer }) => {
  // const [isExpanded, setExpanded] = useState(false)
  return (
    <div className="pb-20 question-wrapper">
      <div className="flex justify-between">
        <h3 className="text-base font-bold">{question}</h3>
      </div>
      <p className="answer-container text-sm font-normal">{answer}</p>
    </div>
  )
}

const FaqSection = ({ title, questionList }) => {
  return (
    <div className="faq-container">
      <h2 className="faq-header font-black text-4xl py-5">{title}</h2>
      {questionList?.map((item, idx) => (
        <FaqItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default FaqSection
