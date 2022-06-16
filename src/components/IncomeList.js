import React from 'react'
import IncomeItem from './IncomeItem'
import PropTypes from 'prop-types'

function IncomeList({ income, setIncome }) {

  const removeIncome = i => {
      localStorage.clear()

    let temp = income.filter((v, index) => index !== i)
    setIncome(temp)
if(income !== {}){
    localStorage.setItem('income', JSON.stringify([...temp]))
}

  }

  const sortByDate = (a, b) => {
    return a.date - b.date
  }

  return (
    <div className='income-list'>
      {income.sort(sortByDate).map((value, index) => (
        <IncomeItem
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  )
}

IncomeList.propTypes = {
  income: PropTypes.array,
  setIncome: PropTypes.func,
}

export default IncomeList
