import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../constants';
import GithubIcon from "../images/github-icon.png";
import WebsiteIcon from "../images/website-icon.png";

const Footer = () => {
    return (
      <Wrapper>
          <Text>Created by Mitchell Shelton</Text>
          <LogosWrapper>
            <Link href="http://mitchellshelton.info" target="_blank">
                <Icon src={WebsiteIcon} alt="Personal Website"></Icon>
            </Link>
            <Link href="https://google.com" target="_blank">
                <Icon src={GithubIcon} alt="Github"></Icon>
            </Link>
          </LogosWrapper>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${COLORS.green};
    padding: 0 1.5rem;

    @media(max-width: ${BREAKPOINTS.phoneMax}) {
        padding: 6rem 1.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
    }
`;

const Text = styled.p`
    color: ${COLORS.white};
`;

const Link = styled.a`

`;


const Icon = styled.img`
    width: 50px;
    height: 50px;
    padding: 4px;
`

const LogosWrapper = styled.div`
    display: flex;
    gap: 24px;

    @media(max-width: ${BREAKPOINTS.phoneMax}) {
        flex-direction: column;
        gap: 0px;
    }
`;




export default Footer;