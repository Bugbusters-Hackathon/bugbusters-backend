import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const filterTheJobArray = (array) => {
    return array.map((element) => {
        return {
            intitule: element.intitule,
            experienceExige: element.experienceExige,
            dateCreation: element.dateCreation,
            departement: element.lieuTravail.libelle
        };
    });
}

export const sendRandomdlyAnumberOfElements = (number, dataFilter) => {

    let toSend = [];
    let numberToFilter = (number != undefined) ? (number <= 10 ? number : 10) : 1
    for (let i = 0; i < numberToFilter; i++) {
        let randomNumber = getRandomInt(dataFilter.length);
        toSend.push(dataFilter[randomNumber]);
    }
    return toSend;
}