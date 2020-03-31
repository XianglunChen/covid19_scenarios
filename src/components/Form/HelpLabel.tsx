import React from 'react'

import _ from 'lodash'

import FormHelpButton from './FormHelpButton'

export interface HelpLabelProps {
  identifier: string
  label: string | React.ReactNode
  help?: string | React.ReactNode
}

export default function HelpLabel({ identifier, label, help }: HelpLabelProps) {
  return (
    <div className="d-flex align-items-center">
      <span className="my-auto text-truncate">{label}</span>
      {help && !_.isEmpty(help) && <FormHelpButton identifier={`${identifier}_help`} label={label} help={help} />}
    </div>
  )
}
