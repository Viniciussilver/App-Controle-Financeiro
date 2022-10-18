import React, { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { Tabela } from './components/GridItem'

import { Header } from './components/Header'
import { Resume } from './components/Resume'

import Format from './utils'

import * as C from './Styles/styles'

function App() {
  const [list, setList] = useState([])

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const allExpense = list
      .filter(item => item.expense)
      .map(item => Number(item.amount))

    const allIncome = list
      .filter(item => !item.expense)
      .map(item => Number(item.amount))

    const expense = allExpense.reduce((acc, item) => acc + item, 0).toFixed(2)
    const income = allIncome.reduce((acc, item) => acc + item, 0).toFixed(2)

    setIncome(Format.formarCurrency(income))
    setExpense(Format.formarCurrency(expense))

    const calc = income - expense

    setTotal(Format.formarCurrency(calc))
  }, [list])

  const deleteItemList = id => {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
    localStorage.setItem('transactions', JSON.stringify(newList))
  }

  const handleSave = e => {
    const newTransition = [...list, e]

    setList(newTransition)

    localStorage.setItem('transactions', JSON.stringify(newTransition))
  }

  useEffect(() => {
    if (localStorage.getItem('transactions')) {
      const itemsSaved = localStorage.getItem('transactions')

      setList(JSON.parse(itemsSaved))
    }
  }, [])

  return (
    <C.Container>
      <Header />
      <C.ContainerItem>
        <Resume income={income} expense={expense} total={total} />
        <Form handleAdd={e => handleSave(e)} />
        <Tabela list={list} deleteItem={e => deleteItemList(e)} />
      </C.ContainerItem>
    </C.Container>
  )
}

export default App
