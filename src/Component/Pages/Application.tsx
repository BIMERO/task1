import React from 'react'
import { Image } from '../Cards/Image'
import { Personalnfo } from '../Cards/Personalnfo'
import { Profile } from '../Cards/Profile'
import { Additional } from '../Cards/Additional'
import { Question } from '../Formfields/Question'

export const Application = () => {
  return (
    <section className='pl-8'>
        <Image/>
        <Personalnfo  />
        <Profile/>
        <Additional/>
    </section>
  )
}


