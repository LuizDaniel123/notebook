import React from 'react'
import Container from './styled'

export default function Header() {
  return (
    <Container>
        <h1 id='logo'>Logo</h1>
        <div>
            <h1>Sobre</h1>
            <h1>Habilidades</h1>
            <h1>Social</h1>
        </div>
    </Container>
  )
}
