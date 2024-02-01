import axios from "axios";
import { filterTheJobArray, sendRandomdlyAnumberOfElements } from "../../utils.js";

const URL = "https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search?codeROME=M1810&departement=75";
const TOKEN = "cixZ_t1TQ9vg6-yDfBz38-NjGjw";

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
            let toSend = sendRandomdlyAnumberOfElements
                (number, filterTheJobArray(response.data.resultats));
            return res.status(200).json(toSend);

        } catch (error) {
            console.log(error);
            return res.status(500).json("server error");
        }
    }
}


