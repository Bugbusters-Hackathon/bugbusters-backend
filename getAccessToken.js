
import axios from 'axios'
import 'dotenv/config';
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const scope = process.env.SCOPE



export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire&grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}&scope=${scope}`
    );

    const date = new Date();
    date.setSeconds(date.getSeconds() + response.data.expires_in);
    const data = { token: response.data.access_token, expires_in: date.getTime() };

    return data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Error', error.message);
    }

    throw error; // You may want to handle the error appropriately or rethrow it.
  }
};