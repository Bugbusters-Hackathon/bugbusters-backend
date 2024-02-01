import axios from "axios";
import { filterTheJobArray, sendRandomdlyAnumberOfElements } from "../../utils.js";
import {getAccessToken} from "../../getAccessToken.js"

const URL = "https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search?codeROME=M1810&departement=75";
const { token, expires_in } = await getAccessToken()

export class JobDataController {
    getRandomJobs = async (req, res) => {
       
        const date = new Date();
        if (expires_in <= date.getTime()){
            const { token, expires_in } = await getAccessToken()
        }
        const { number } = req.query;
        try {
            const response = await axios.get(URL, {
                params: {
                    codeROME: 'M1810',
                    departement: '75'
                },
                headers: {
                    'Authorization': 'Bearer ' + token
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


