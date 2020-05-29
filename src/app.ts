import WeatherService from './services/weather.service.js'
import Weather from './models/weather.model.js'

// Decleare Location input array
const locations: (string | number)[] = ['New York', 99501, 'Ahmedabad']

const weather = new WeatherService('current')

async function getWeather(): Promise<void> {
  for (const location of locations) {
    let result: Weather = await weather.getLocationWeather(location)
  }
}
getWeather()
