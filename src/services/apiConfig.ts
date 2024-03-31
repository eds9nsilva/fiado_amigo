import axios from "axios";
import { Config } from "@config";

export const api = axios.create({
    baseURL: Config.API_URL,
    timeout: 1200,
})

api.interceptors.request.use(function (config) {

    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTExNjkzMDIsImV4cCI6MTcxMzc2MTMwMiwic3ViIjoiZDEyMGE0OGQtNzQzYy00NTdmLTljZGItYWVlZTJlZDlmOTU4In0.XO-qIZI09fSejenVFLVfLs7J8XcJmPcJOmCCjpxhMnU`;

    return config;
});