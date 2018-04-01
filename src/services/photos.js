function getPhotoUrl(farmId, serverId, photoId, secret) {
  return `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}`
}

const getFlickerAPI = method => `https://api.flickr.com/services/rest/?method=${method}&api_key=ad24bb1f7a2c63b760462b485f9bb9f0&format=json`

export function getPhotos(text, page) {
  return `${getFlickerAPI('flickr.photos.search')}&per_page=25&text=${text}&page=${page}`
}

export function getSmallPhoto({ farm, server, id, secret }) {
  return `${getPhotoUrl(farm, server, id, secret)}_s.jpg`
}

export function getPhotoInfo(id) {
  return `${getFlickerAPI('flickr.photos.getInfo')}&photo_id=${id}`
}
