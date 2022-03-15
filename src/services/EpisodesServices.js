import axios from 'axios'

//const baseURL = process.env.API_URL
const baseURL = 'http://rickandmortyapi.com/api'

export const getEpisodes = async () => {
    const res = await axios.get(baseURL+`/episode`)
    //console.log(res.data.results)
    return  res.data.results //episodes
  }