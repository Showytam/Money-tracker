import React, {useRef} from 'react'
import PropTypes from 'prop-types'

const IncomeForm = ({income, setIncome}) => {
const desc = useRef(null)
const date = useRef(null)
const price = useRef(null)

const AddIncome = (e) => {
    e.preventDefault()
    if(desc.current.value === '' || price.current.value === '') {
        alert('Будь ласка, не залишайте поля пустими')
        return
    }
 let d = date.current.value.split('-')
 let newD = new Date(d[0], d[1] - 1, d[2])
    if(desc.current.value !== '' || price.current.value !== '') {
 setIncome([
   ...income,
   {
     desc: desc.current.value,
     price: price.current.value,
     date: newD.getTime(),
   },
 ])
    }

  localStorage.setItem('income' ,JSON.stringify([
    ...income,
    {
      desc: desc.current.value,
      price: price.current.value,
      date: newD.getTime(),
    },
  ]))

 desc.current.value = ''
 price.current.value = null
 date.current.value = null
}

    return (
      <form className='income-form' onSubmit={AddIncome}>
        <div className='form-inner'>
          <input
            type='text'
            name='desc'
            id='desc'
            placeholder='За що?'
            autocomplete='off'
            ref={desc}
          />
          <input
            type='number'
            name='price'
            id='price'
            placeholder='Дохід...'
            ref={price}
          />
          <input
            type='date'
            name='date'
            id='date'
            placeholder='Дата...'
            ref={date}
          />
          <input type='submit' value='Додати' />
        </div>
      </form>
    )
}

IncomeForm.propTypes = {
  income: PropTypes.array,
  setIncome: PropTypes.func,
}

export default IncomeForm