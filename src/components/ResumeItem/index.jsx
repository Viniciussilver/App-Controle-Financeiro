import React from 'react'

import * as C from './style'
import PropTypes from 'prop-types'

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

ResumeItem.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.element,
  value: PropTypes.number,
}
