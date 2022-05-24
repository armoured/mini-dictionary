import React from 'react';
import styled from 'styled-components';

const Error = ({errorMessage}) => {
    return (
      <Wrapper>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 16px 0;
`;

const ErrorMessage = styled.p`
    color: red;
`;


export default Error;