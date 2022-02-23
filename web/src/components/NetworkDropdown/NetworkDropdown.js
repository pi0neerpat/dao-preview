import { SelectField } from '@redwoodjs/forms'
import { EIP_155_NETWORK_SPEC } from 'src/helpers/constants'

const NetworkDropdown = ({ defaultValue, value, name, validation }) => {
  return (
    <SelectField
      name={name}
      defaultValue={defaultValue}
      value={value}
      validation={validation}
      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
    >
      {EIP_155_NETWORK_SPEC.map((net) => (
        <option value={net.chainId} key={net.chainId}>
          {net.name}
        </option>
      ))}
    </SelectField>
  )
}

export default NetworkDropdown
