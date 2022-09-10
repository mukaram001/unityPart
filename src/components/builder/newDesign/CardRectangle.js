import React from 'react'

export const CardRectangle = (props) => {
  return (
    <div className='cardRectangle' onClick={props.handleNewCollection}>{props.children}</div>
  )
}
