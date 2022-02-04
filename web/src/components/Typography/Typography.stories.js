import { H1, H2, H3, P } from './Typography'

export const generated = () => {
  return (
    <div>
      <H1 color="greenDark">I am an H1 with color greenDark</H1>
      <H2 pb={10} pt={10}>
        I am an H2 with padding bottom and top 10px
      </H2>
      <H3 color="blueLink">I am an H3 with color blueLink</H3>
      <P color="orange" mb={12} mt={12}>
        Orange p tag with margin bottom and top 12px
      </P>
      <P size={11}>I am smaller p tag (11px)</P>
    </div>
  )
}

export default { title: 'Components/Typography' }
