import React from 'react'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { StyledSocialIcons } from '../styles/socialIconsStyled';

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
        <li>
            <a href="https://twitter.com">
                <TiSocialTwitter />
            </a>
        </li>
        <li>
            <a href="https://facebook.com">
                <TiSocialFacebook />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com">
                <TiSocialLinkedin />
            </a>
        </li>
    </StyledSocialIcons>
  )
}
