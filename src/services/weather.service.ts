import request from 'request-promise'
import { API_URL, API_ACCESS_KEY } from '../config.js'

import Weather from '../models/weather.model.js'

export default class WeatherService {
  private weatherResponse!: Weather
  private apiEndPoint: string
  constructor(apiEndPoint: string) {
    this.apiEndPoint = apiEndPoint
  }
  public async getLocationWeather(location: string | number): Promise<Weather> {
    const options = {
      uri: API_URL + this.apiEndPoint,
      qs: {
        access_key: API_ACCESS_KEY,
        query: location,
      },
      json: true,
    }
    await request(options)
      .then((data) => {
        this.weatherResponse = data as Weather
      })
      .catch((err) => {
        console.error(err)
        this.weatherResponse = err as Weather
      })
    return this.weatherResponse
  }
}
