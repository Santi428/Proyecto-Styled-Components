import React from 'react'
import { Container } from '../styles/containerStyled'
import { Logo, Nav } from '../styles/headerStyled'
import { Button } from '../styles/buttonStyled'
import { Flex } from '../styles/flexStyled'

export const Header = () => {

  return (
    <Container>
        <Nav>
            <Logo src='/images/logo.svg' alt='Logo'/>
            <Button>Proba Gratis!</Button>
        </Nav>

        <Flex>
            <div>
                <h1></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo quisquam quia, rem odit aperiam perferendis, libero et beatae corrupti excepturi repellendus repudiandae distinctio id dignissimos animi incidunt aliquid dolore!</p>
            </div>
            <Button bg='#ff0099' color='#fff'>Empezá ahora gratis</Button>
        </Flex>
    </Container>
  )
}
