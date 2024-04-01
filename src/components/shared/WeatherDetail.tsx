import { WeatherCustom } from '../../types/API'
import { formatTemperature } from '../../utils/formatTemperature'

interface WeatherDetailProps{
  weather: WeatherCustom
}
export default function WeatherDetail({weather}:WeatherDetailProps) {
  return (
    <div className='flex flex-col justify-center items-center py-6 px-14 gap-4 border-2 rounded-lg'>
      <h2 className='text-2xl font-semibold'>Weather of {weather.name}</h2>
      <p className='font-bold text-4xl'>{formatTemperature(weather.main.temp)}&deg;C</p>
      <div className='flex gap-x-10'>
        <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
        <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
