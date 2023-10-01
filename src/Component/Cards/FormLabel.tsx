import React from 'react'

interface FormLabelProps{
    title: string
    span?: string
    className?: string
}

const FormLabel: React.FC<FormLabelProps> = ({title, span, className}) => {
  return (
    <p className= {`w-full font-semibold text-xl ${className}`} > {title} <span className='font-normal'> {span} </span> </p>
  )
}

export default FormLabel