import { filterTheJobArray, sendRandomdlyAnumberOfElements } from "../utils.js";

// Test for filterTheJobArray
describe('filterTheJobArray', () => {
    it('should correctly filter the job array', () => {
        const inputArray = [
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', lieuTravail: { libelle: 'Department1' }, dataRandom: "random" },
        ];

        const result = filterTheJobArray(inputArray);

        expect(result).toEqual([
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
        ]);
    });
});

// Test for sendRandomlyANumberOfElements
describe('sendRandomlyANumberOfElements', () => {
    it('should randomly send a specific number of elements', () => {

        const inputNumber = 5; // You can adjust the number as needed
        const inputDataFilter = [
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
        ];

        const result = sendRandomdlyAnumberOfElements(inputNumber, inputDataFilter);

        expect(result).toHaveLength(5); // Adjust the length as needed
    });
    it('should send 10 if number > 10', () => {

        const inputNumber = 11; // You can adjust the number as needed
        const inputDataFilter = [
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
        ];

        const result = sendRandomdlyAnumberOfElements(inputNumber, inputDataFilter);

        expect(result).toHaveLength(10); // Adjust the length as needed
    });
    it('should send 1 if number ==undefined or null', () => {

        const inputNumber = undefined; // You can adjust the number as needed
        const inputNumber2 = null; // You can adjust the number as needed

        const inputDataFilter = [
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
        ];

        const result = sendRandomdlyAnumberOfElements(inputNumber, inputDataFilter);
        const result2 = sendRandomdlyAnumberOfElements(inputNumber2, inputDataFilter);

        expect(result).toHaveLength(1); // Adjust the length as needed
        expect(result2).toHaveLength(1); // Adjust the length as needed

    });

    it('should randomly send a the number of elements even if array.length < inputNumber', () => {

        const inputNumber = 5; // You can adjust the number as needed
        const inputDataFilter = [
            { intitule: 'Job1', experienceExige: 'Experience1', dateCreation: '2022-01-01', departement: 'Department1' },
        ];

        const result = sendRandomdlyAnumberOfElements(inputNumber, inputDataFilter);

        expect(result).toHaveLength(5); // Adjust the length as needed
    });
    it('should send [] array.length === 0', () => {

        const inputNumber = 5; // You can adjust the number as needed
        const inputDataFilter = [
        ];

        const result = sendRandomdlyAnumberOfElements(inputNumber, inputDataFilter);
        expect(result).toEqual([]);
    });
});
