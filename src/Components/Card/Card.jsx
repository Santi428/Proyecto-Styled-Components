import React from 'react'
import { StyledCard } from '../styles/styledCard'

export const Card = ({ id, title, body, image}) => {
  return (
    <StyledCard $layout={id % 2 == 0 && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`/images/${image}`} alt="card description" />
        </div>
    </StyledCard>
  )
}
