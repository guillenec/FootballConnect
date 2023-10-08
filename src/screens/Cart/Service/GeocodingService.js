const geocodeAddress = async (direction) => {
  try {
    const encodeDirection = encodeURIComponent(direction)
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeDirection}&format=json`

    const response = await fetch(url)
    const data = await response.json()

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat)
      const lng = parseFloat(data[0].lon)
      return { lat, lng }
    } else {
      throw new Error('No se encontró la dirección')
    }
  } catch (error) {
    throw new Error('No se encontró la dirección')
  }
}

export default geocodeAddress
