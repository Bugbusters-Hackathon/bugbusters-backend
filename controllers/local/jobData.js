import { filterTheJobArray, sendRandomdlyAnumberOfElements } from "../../utils.js";
import { readJSON } from '../../utils.js'


const jobs = readJSON('./localData/jobDataParis.json')

export class JobDataController {
    getRandomJobs = async (req, res) => {
        const { number } = req.query;
        try {
            const response = jobs;
            let toSend = sendRandomdlyAnumberOfElements
                (number, filterTheJobArray(response.resultats));
            return res.status(200).json(toSend);

        } catch (error) {
            console.log(error);
            return res.status(500).json("server error");
        }
    }
}


