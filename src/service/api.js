import axios from 'axios'

export const api = axios.create({
    baseURL: "https://webhook.site/e43f908d-1bed-4afe-a73b-da3c6d624516"
})

export const joke = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/random"
})