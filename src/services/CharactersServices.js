import axios from 'axios'

//const baseURL = process.env.API_URL
const baseURL = 'http://rickandmortyapi.com/api'

export const getCharacters = async () => {
    const res = await axios.get(baseURL+`/character`)
    //console.log(res.data.results)
    return  res.data.results //characters
  }

  export const filterCharacter = async (query,value) => {
    if(query.length>0){
      for(let i=0; i<query.length;i++){
        var search=query[i]+'='+value[i]
        if(i!==query.length){
          search=search+'&'
        }
      }
    }
    else{
      const res = await axios.get(baseURL+`/${query}=${value}`)
      return  res.data.results
    }
    const res = await axios.get(baseURL+`/${search}`)
    console.log(res.data.results)
    return  res.data.results //characters
  }
