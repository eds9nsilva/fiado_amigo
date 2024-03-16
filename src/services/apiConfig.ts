import axios from "axios";
import { Config } from "src/config/getURL";

export const api = axios.create({
    baseURL: Config.API_URL,
    timeout: 1200,
    headers: {
        Authorization: 'Bearer MQ.MrCJ6Oc0IoO_3FKeAnCVsHXyN1GPBLyEHaAdygcw-OYcZyToytXipy8HduES',
    }
})