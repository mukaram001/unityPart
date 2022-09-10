import React from 'react'
import '../../../assests/styles/newDesign/Cards.css'
export const Card = (props) => {
  return (
    <div className='card'>{props.children}</div>
  )
}
