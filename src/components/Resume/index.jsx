import React from 'react'
import { ResumeItem } from '../ResumeItem'

import * as C from './style'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

export const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Entradas" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}
