import axios from 'axios';

export const getQuestions = () => {
    const response = axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
    console.log(response)
}