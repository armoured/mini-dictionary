import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../constants';

const Form = ({ 
    searchTerm, 
    setSearchTerm, 
    handleSubmit,
}) => {
    return (
      <FormWrapper onSubmit={e => handleSubmit(e)}>
          <TextInput role="textbox" type="text" placeholder="Search..." value={searchTerm} onChange={e => {setSearchTerm(e.target.value)}} />
          <Button role="button" onClick={e => handleSubmit(e)}>Submit</Button>
      </FormWrapper>
    );
}

const FormWrapper = styled.form`
    display: flex;
    gap: 16px;
    padding: 0 16px;

    @media(max-width: ${BREAKPOINTS.phoneMax}) {
        flex-direction: column;
    }

    
`;

const TextInput = styled.input`
    width: 250px;

    @media(max-width: ${BREAKPOINTS.phoneMax}) {
        width: 100px;
    }
`;

const Button = styled.button`
    background-color: ${COLORS.green};
    color: ${COLORS.white};
    padding: 7px 14px;
    border-radius: 4px;
    text-align: center;
`

export default Form;