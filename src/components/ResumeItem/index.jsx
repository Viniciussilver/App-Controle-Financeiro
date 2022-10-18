import React from 'react'

import * as C from './style'

export const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.ContainerItem>
      <C.Header>
        <p>{title}</p>
        <Icon />
      </C.Header>
      <span>{value}</span>
    </C.ContainerItem>
  )
}
