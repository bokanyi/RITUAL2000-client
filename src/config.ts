import generateRandomString from 'generate-random-string'

const rootUrl = "https://accounts.spotify.com/authorize"
const client_id = import.meta.env.VITE_CLIENT_ID
const redirect_uri = import.meta.env.VITE_REDIRECT_URI

const state = generateRandomString("16", false)
const scope = "streaming \
user-read-email \
user-read-private \
playlist-read-private \
playlist-modify-private \
playlist-modify-public"

export const AUTH_URL = `${rootUrl}
?client_id=${client_id}
&response_type=code
&redirect_uri=${redirect_uri}
&state=${state}
&scope=${scope}`