import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ totalIncome }) => {
  return (
    <header>
      <h1>Трекер доходів</h1>
      <div className='total-income'>&#8372;{totalIncome}</div>
    </header>
  )
}

Header.propTypes = {
  totalIncome: PropTypes.number,
}

export default Header
