import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Dictionary from './components/Dictionary';
import Error from './components/Error';
import { COLORS } from './constants';
import { processMeanings, getDictionaryWord } from './utils';

const App = () => {

  const [previousSearchTerm, setPreviousSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [processedMeanings, setProcessedMeanings] = useState({});
  const [word, setWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Don't submit extra api calls if the search term hasn't changed
    if (searchTerm === "" || searchTerm === previousSearchTerm) {
        return;
    }

    setPreviousSearchTerm(searchTerm);

    const {data, status} = await getDictionaryWord(searchTerm);

    if (status === 200) {
      const groupedMeanings = processMeanings(data);
      setProcessedMeanings(groupedMeanings);
      setWord(searchTerm);
      
      // clear previous error message
      if (errorMessage) {
        setErrorMessage("");
      }
    } else {
      // Don't display detailed potential 500 errors to the user (a stack trace could be 
      // info used by hackers if they realise they broke part of our system)
      // instead we provide a vague error message.
      // we should also log any errors to our logging system here.
      if (status !== 500) {
        setErrorMessage(data);
      } else {
        setErrorMessage("Request Failed")
      }
    }
  }

  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Form 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              handleSubmit={handleSubmit}
          />
          <MaxWidthWrapper>
            {errorMessage ? 
              <Error errorMessage={errorMessage} /> 
              : 
              <Dictionary 
                processedMeanings={processedMeanings} 
                word={word} 
              />
            }
          </MaxWidthWrapper>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 5rem;
  height: 100%;
`;

const Main = styled.main`
  background-color: ${COLORS.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;

const MaxWidthWrapper = styled.div`
  max-width: min(100%, calc(800px));
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export default App;
