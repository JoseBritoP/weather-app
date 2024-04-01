import axios from "axios";
import { SearchType } from "../types";
import { Weather,WeatherCustom } from "../types/API";
import { useMemo, useState } from "react";

const initialState = {
  name:'',
  main:{
    temp:0,
    temp_max:0,
    temp_min:0,
    feels_like:0,
    pressure:0,
    humidity:0,
  }
};


export default function useWeather() {

  const [weather,setWeather] = useState<WeatherCustom>(initialState);

  const [loading,setLoading] = useState(false);

  const hasWeatherTherData = useMemo(()=>weather.name,[weather]);

  const fetchWeater = async (search:SearchType) => {
    setLoading(true)
    setWeather(initialState);
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${import.meta.env.VITE_API_KEY}`
      const data = await axios.get(geoUrl);

      if(data.status !== 200) throw new Error('Error fetching')
      const lat =data.data[0].lat
      const lon =data.data[0].lon
      
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`;
      const res = await axios.get<Weather>(weatherUrl);
      setWeather(res.data)
    } catch (error) {
      console.log('Error',error)
    } finally {
      setLoading(false)
    }
    
  };

  return { fetchWeater, weather, hasWeatherTherData, loading }
}
