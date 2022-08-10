export interface WeatherData {
    queryCost: number
    latitude: number
    longitude: number
    resolvedAddress: string
    address: string
    timezone: string
    tzoffset: number
    description: string
    days: any[]
    alerts: any[]
    stations: Stations
    currentConditions: CurrentConditions
  }
  
  export interface Stations {}
  
  export interface CurrentConditions {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: any
    snow: number
    snowdepth: number
    preciptype: any
    windgust: any
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    conditions: string
    icon: string
    stations: any[]
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
  }
  