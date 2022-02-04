import Section from './Section'
import Table from 'src/components/Table'
export const generated = () => {
  return <Section>Some basic text</Section>
}
export const table = () => {
  const match = {
    result: 'White won',
    moves: 46,
    date: 'April, 20 2020',
  }
  return (
    <Section>
      <Table onRowClick={() => {}} data={[match, match, match]} />
    </Section>
  )
}

export default { title: 'Components/Section' }
