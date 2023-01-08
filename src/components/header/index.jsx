import React from 'react'
import Container from './styled'

export default function Header() {
  return (
    <Container>
        <h1 id='h1Logo'>Logo</h1>

        <div id='divMenu'>
            <h1 className='h1Menu'>Sobre</h1>
            <h1 className='h1Menu'>Habilidades</h1>
            <h1 className='h1Menu'>Social</h1>
        </div>
    </Container>
  )
}
