import Alert from "../shared/Alert";
import { SearchType } from "../../types";
import { countries } from "../../utils/contries";
import useForm from "../../hooks/useForm";

interface FormProps {
  fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({fetchWeather}:FormProps) {

  const { search, alert, handleChange, handleSubmit } = useForm({fetchWeather})

  return (
    <form onSubmit={handleSubmit}>
      <legend className="flex flex-col justify-center items-center p-4 gap-4 border-2 rounded-lg">
        {alert && <Alert message="All fields are required"/>}
        <div className="flex gap-x-10 items-center">
          <label htmlFor="city" className="text-center">City:</label>
          <input type="text" id='city' name='city' placeholder='City...' className="p-1 rounded-md text-black" value={search.city} onChange={handleChange}/>
        </div>
        <div className="flex gap-x-10 items-center">
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" className="p-1 rounded-md text-black mr-6" value={search.country} onChange={handleChange}>
          <option value="---" >-- Select the country --</option>
          {countries.map(({code,name})=>(
            <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
        <button aria-label="Check Weather" className="bg-emerald-500 hover:bg-emerald-600 transition-colors duration-200 ease-in-out py-2 px-10 mx-auto rounded-md border-2 border-green-900 font-bold text-green-950">Check weather</button>
      </legend>
    </form>
  )
}
