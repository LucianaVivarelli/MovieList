import axios from "axios";

// Fazendo o import via axios e em pastas separadas, você consegue um código mais limpo e de fácil leitura.

export const api = axios.create({
  baseURL: 'https://movies-app.prakashsakari.repl.co/api/movies'
})
