import React from 'react'

import * as C from './style'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'

export const Tabela = ({ list, deleteItem }) => {
  return (
    <C.ContainerItem>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th className="column-trash"></th>
        </tr>
        {list &&
          list.map(item => (
            <tr key={item.id}>
              <td>{item.desc}</td>
              <td>{item.amount}</td>
              <td>
                {' '}
                {item.expense ? (
                  <FaRegArrowAltCircleDown color="red" />
                ) : (
                  <FaRegArrowAltCircleUp color="green" />
                )}
              </td>
              <td className="column-trash">
                <FaTrash
                  onClick={() => deleteItem(item.id)}
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </td>
            </tr>
          ))}
      </table>
    </C.ContainerItem>
  )
}
