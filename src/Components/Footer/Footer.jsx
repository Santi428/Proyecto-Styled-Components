import React from 'react'
import { Container } from '../styles/containerStyled'
import { Flex } from '../styles/flexStyled'
import { SocialIcons } from '../SocialIcons/SocialIcons'
import { FooterStyled } from '../styles/footerStyled'

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <img width='200px' src="/images/logo.svg" alt="logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit  
            </li>
            <li>+54-11-5434-2321</li>
            <li>consultas@products.com</li>
          </ul>
          <ul>
            <li>Acerca de</li>
            <li>¿Qué hacemos?</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Metas</li>
            <li>Blog</li>
            <li>Contáctenos</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </FooterStyled>
  )
}
