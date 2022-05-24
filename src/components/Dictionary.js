import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';

const Dictionary = ({ 
    processedMeanings,
    word
}) => {               

    const renderDictionary = () => {
        return Object.keys(processedMeanings).map((wordType, idx) => {
            return (
                <DictionaryListWrapper key={`list-${idx}`}>
                    <WordType>{wordType}</WordType>
                    <DictionaryList>
                        {renderDictionaryItems(wordType)}
                    </DictionaryList>
                </DictionaryListWrapper>
            )
        })
    }

    const renderDictionaryItems = (wordType) => {
        return processedMeanings[wordType].map(({definition}, idx) => {
            return (
                <DictionaryListItem key={`list-${wordType}-${idx}`}>
                    {definition}
                </DictionaryListItem>
            )
        });
    }

    return (
      <Wrapper>
        <Word>{word}</Word>
        {renderDictionary()}
      </Wrapper>
    );
}

const Wrapper = styled.div`

`;

const Word = styled.h1`
    font-size: 2rem;
`

const DictionaryListWrapper = styled.div`
    padding: 12px 0;

    &:not(:last-of-type) {
        border-bottom: 1px solid ${COLORS.green};
    }
`;

const DictionaryList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 4px;

    list-style-type: disc;
    list-style-position: inside;
`;

const DictionaryListItem = styled.li`

    padding: 0 12px;

    &::marker {
        color: ${COLORS.green};
        font-size: 1.2rem;
        margin-left: -15px;
    }

`;

const WordType = styled.p`
    font-style: italic;
`;

export default Dictionary;