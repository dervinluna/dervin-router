const baseUrl = 'https://rickandmortyapi.com/api/';
const charactersUrl = `${baseUrl}character/`;


export const getMorty = () => {
    return fetch(charactersUrl + '2').then(res => res.json());
}