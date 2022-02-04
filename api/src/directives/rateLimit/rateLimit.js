import { createValidatorDirective } from '@redwoodjs/graphql-server'
import { logger } from 'src/lib/logger'

export const schema = gql`
  """
  Use @rateLimit to validate access to a field, query or mutation.
  """
  directive @rateLimit on FIELD_DEFINITION
`

const validate = ({ context, directiveArgs }) => {
  /**
   * Write your validation logic inside this function.
   * Validator directives do not have access to the field value, i.e. they are called before resolving the value
   *
   * - Throw an error, if you want to stop executing e.g. not sufficient permissions
   * - Validator directives can be async or sync
   * - Returned value will be ignored
   */

  // currentUser is only available when auth is setup.
  logger.debug(
    { currentUser: context.currentUser },
    'currentUser in rateLimit directive'
  )

  // You can also modify your directive to take arguments
  // and use the directiveArgs object provided to this function to get values
  // See documentation here: https://redwoodjs.com/docs/directives
  logger.debug(directiveArgs, 'directiveArgs in rateLimit directive')

  throw new Error('Implementation missing for rateLimit')
}

const rateLimit = createValidatorDirective(schema, validate)

export default rateLimit
