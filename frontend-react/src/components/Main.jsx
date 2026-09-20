import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock prediction Portal</h1>
        <p className='text-light lead'>
            Global Influences: Crude oil prices and international interest rates continue to dictate foreign institutional investor sentiment.
        </p>
        <Button text = 'Login' class = 'btn-outline-info' />
        </div>

    </div>
    </>
  )
}

export default Main