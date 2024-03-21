import axios from "axios";
import { Config } from "@config";

export const api = axios.create({
    baseURL: Config.API_URL,
    timeout: 1200,
})