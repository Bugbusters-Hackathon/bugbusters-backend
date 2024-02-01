import axios from "axios";
import { getRandomInt } from "../../utils.js";

const URL = "https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search?codeROME=M1810&departement=75";
const TOKEN = "N01YuvWLY7F2xO0WqiqIKP48QQU";

export class JobDataController {
    getRandomJobs = async (req, res) => {
        const { number } = req.query;
        try {
            const response = await axios.get(URL, {
                params: {
                    codeROME: 'M1810',
                    departement: '75'
                },
                headers: {
                    'Authorization': 'Bearer ' + TOKEN
                }
            });
            let dataFilter = response.data.resultats.map((element) => {
                return {
                    intitule: element.intitule,
                    experienceExige: element.experienceExige,
                    dateCreation: element.dateCreation,
                    departement: element.lieuTravail.libelle
                };
            });
            let toSend = [];
            for (let i = 0; i < (number ?? 1); i++) {
                let randomNumber = getRandomInt(dataFilter.length);
                toSend.push(dataFilter[randomNumber]);
            }

            return res.status(200).json(toSend);

        } catch (error) {
            console.log(error);
            return res.status(500).json("server error");
        }
    }
}


