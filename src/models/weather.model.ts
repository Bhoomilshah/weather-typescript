export interface WeatherLocation {
  name: string
  country: string
  localtime: string
  localtime_epoch: number
}

export interface WeatherData {
  temperature: number
  wind_speed: number
  wind_degree: number
  wind_dir: string
  pressure: number
  humidity: number
  cloudcover: number
  uv_index: number
  visibility: number
}

export default interface Weather {
  location: WeatherLocation
  current: WeatherData
}

/**
 * Weather API structure
 * Website : https://weatherstack.com/
 * Documentation : https://weatherstack.com/documentation
 * Respone Sample
 *
 * {
 *  ....
 *  "location": {
 *       "name": "New York",
 *       "country": "United States of America",
 *       "localtime": "2019-09-07 08:14",
 *       "localtime_epoch": 1567844040,
 *       ...
 *   },
 *   "current": {
 *       "temperature": 13,
 *       "wind_speed": 0,
 *       "wind_degree": 349,
 *       "wind_dir": "N",
 *       "pressure": 1010,
 *       "humidity": 90,
 *       "cloudcover": 0,
 *       "uv_index": 4,
 *       "visibility": 16
 *       ...
 *   }
 * }
 */
