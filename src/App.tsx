import './App.css'
import Form from './components/Form/Form'
import Spinner from './components/shared/Spinner';
import WeatherDetail from './components/shared/WeatherDetail'
import useWeather from './hooks/useWeather'
import NotFound from './components/shared/NotFound';

function App() {
  const { fetchWeater, weather, hasWeatherTherData, loading, notFound } = useWeather();
  return (
    <main className='flex flex-col justify-center items-center gap-y-10'>
      <h1 className='text-center font-bold text-4xl mt-8 mb-4'>Weather App</h1>
      <section className='w-full max-w-[100rem] mx-auto
        flex flex-col items-center justify-center
        gap-y-5
        md:flex-row md:justify-evenly 
      '>
        <Form fetchWeather={fetchWeater}/>
        {hasWeatherTherData && <WeatherDetail weather={weather}/>}
        {loading && <Spinner/>}
        {notFound && <NotFound/>}
      </section>
    </main>
  )
}

export default App