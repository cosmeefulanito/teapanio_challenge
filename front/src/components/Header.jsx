import React from 'react'

const Header = ({crypto, counter}) => {
  return (
    <>
        <div className="notification is-primary">API request <strong>BTC</strong> value.</div>
        <section>
            <p>El valor del Bitcoin se actualizará en: <span className='is-size-3'>{counter}</span> </p>
            <p>Valor del Bitcoin: <strong>{crypto}</strong></p>
        </section>
    </>
  )
}

export default Header