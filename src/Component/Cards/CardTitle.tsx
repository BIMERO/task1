import React from 'react'

interface CardTitleProps{
    title: string
    className?: string
}

const CardTitle: React.FC<CardTitleProps> = ({title, className}) => {
  return (
    <p className= {`bg-brand-150 font-semibold text-2xl ${className}`} > {title} </p>
  )
}

export default CardTitle