import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

import * as C from './style'

export const Form = ({ handleAdd }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState(false)

  const handleSave = () => {
    if (!desc || !amount) {
      return alert('Informe a descrição e o valor!')
    } else if (amount < 1) {
      return alert('O valor tem que ser positivo!')
    }

    const transaction = {
      id: uuid(),
      desc,
      amount,
      expense: isExpense,
    }

    handleAdd(transaction)

    setDesc('')
    setAmount('')
  }

  return (
    <C.ContainerForm>
      <div className="box-input">
        <label>Descrição</label>
        <input
          value={desc}
          type="text"
          onChange={e => setDesc(e.target.value)}
        />
      </div>
      <div className="box-input">
        <label>Valor</label>
        <input
          value={amount}
          type="number"
          onChange={e => setAmount(e.target.value)}
        />
      </div>

      <div>
        <div className="box-input-radio">
          <input
            className="input-radio"
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <label className="label" htmlFor="rIncome">
            Entrada
          </label>
          <input
            name="group1"
            className="input-radio"
            type="radio"
            id="rExpenses"
            onChange={() => setIsExpense(!isExpense)}
          />
          <label htmlFor="rExpenses">Saída</label>
        </div>
      </div>

      <button onClick={handleSave}>Adicionar</button>
    </C.ContainerForm>
  )
}
Form.propTypes = {
  handleAdd: PropTypes.func,
}
