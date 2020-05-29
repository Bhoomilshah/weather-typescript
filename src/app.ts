import WeatherService from './services/weather.service.js'
import Weather from './models/weather.model.js'

// Decleare Location input array
const locations: (string | number)[] = ['New York', 99501, 'Ahmedabad']

const weather = new WeatherService('current')

async function getWeather(): Promise<void> {
  for (const location of locations) {
    let result: Weather = await weather.getLocationWeather(location)
    console.log(`---------- Weather Data of ${location} ----------`)
    console.log(`Name of location: ${result.location.name}`)
    console.log(`Current time : ${result.location.localtime}`)
    console.log(`temperature : ${result.current.temperature}`)
    console.log(`wind_speed  : ${result.current.wind_speed}`)
    console.log(`wind_degree : ${result.current.wind_degree}`)
    console.log(`wind_dir : ${result.current.wind_dir}`)
    console.log(`pressure : ${result.current.pressure}`)
    console.log(`humidity : ${result.current.humidity}`)
    console.log(`cloudcover : ${result.current.cloudcover}`)
    console.log(`uv_index : ${result.current.uv_index}`)
    console.log(`visibility : ${result.current.visibility}`)
  }
}
getWeather()
