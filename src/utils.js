import axios from 'axios';
import { dictionaryApi } from './constants';


export const processMeanings = (data) => {
    const [item] = data;
    const groupedMeanings = {};
    if (item) {
        const { meanings } = item;

        // We have to merge meanings by partOfSpeech.
        // i.e: the word dog has meanings array like
        // [
        //   {partOfSpeech: 'noun', definitions: Array(18)}
        //   {partOfSpeech: 'verb', definitions: Array(7)}
        //   {partOfSpeech: 'noun', definitions: Array(3)}
        // ]
        meanings.forEach(meaning => {

            const { partOfSpeech } = meaning;

            if (!(partOfSpeech in groupedMeanings)) {
                groupedMeanings[partOfSpeech] = [];
            }

            meaning.definitions.forEach(definition => {
                groupedMeanings[partOfSpeech].push(definition);
            })
        })
        
    }
    return groupedMeanings
}

export const getDictionaryWord = async (searchTerm) => {
    try {
      const { data, status } = await axios.get(`${dictionaryApi}${searchTerm}`);
      return {data: data, status: status}
    } catch (e) {
      return {data: e.response.data.message, status: e.response.status}
    }
}