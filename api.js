const fetch = require('node-fetch')
const API_KEY_UNSAFE = 'yE7mOsHTysPp0f0LzipnJ6Fs9KECdOnQmwAz1thR'

const getPhotos = async(roverName) => {
  const photos = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${API_KEY_UNSAFE}`)
  .then(data => data.json())
  .then(res => res.photos)

  return photos.map(photo => ({
    id: photo.id,
    sol: photo.sol,
    src: photo.img_src,
    earthDate: photo.earth_date
  }))
}

const getRover = async (roverName) => {
  const rover = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${API_KEY_UNSAFE}`)
  .then(data => data.json())
  .then(res => res.photo_manifest)

  return ({
    name: rover.name,
    landingDate: rover.landing_date,
    launchDate: rover.launch_date,
    status: rover.status,
    maxSol: rover.max_sol,
    maxDate: rover.max_date,
    totalPhotos: rover.total_photos,
    photos: getPhotos(roverName)
  })
}

module.exports = { getRover }