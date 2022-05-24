import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
      <Wrapper>
          <Logo>Mini Dictionary</Logo>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`

`

export default Header