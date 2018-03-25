function getPhotoUrl(farmId, serverId, photoId, secret) {
  return `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}`
}

export function getSmallPhoto({ farm, server, id, secret }) {
  return `${getPhotoUrl(farm, server, id, secret)}_s.jpg`
}