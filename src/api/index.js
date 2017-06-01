import config from './config'

const { API_KEY } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=guatemala&api_key=${API_KEY}&format=json`


export default function getArtist(){
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
