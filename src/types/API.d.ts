export type Weather = {
  coord:      Coord;
  weather:    WeatherElement[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export type WeatherCustom = {
  name:       string;
  main:{
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
  } 
}

export type Map = {
  name:        string;
  local_names: LocalNames;
  lat:         number;
  lon:         number;
  country:     string;
  state:       string;
}

export type Clouds = {
  all: number;
}

export type Coord = {
  lon: number;
  lat: number;
}

export type Main = {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  sea_level:  number;
  grnd_level: number;
}

export type Sys = {
  country: string;
  sunrise: number;
  sunset:  number;
}

export type WeatherElement = {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export type Wind = {
  speed: number;
  deg:   number;
  gust:  number;
}


export type LocalNames = {
  es: string;
  el: string;
  en: string;
  he: string;
  ru: string;
  uk: string;
}
