import { ChangeEvent, FormEvent, useState } from "react";
import Alert from "../shared/Alert";
import { SearchType } from "../../types";
import { countries } from "../../utils/contries";

interface FormProps {
  fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({fetchWeather}:FormProps) {
  const [search,setSearch] = useState<SearchType>({
    city:'',
    country:''
  });

  const [alert,setAlert] = useState(false);
  const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setSearch({
      ...search,
      [name]:[value]
    })
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(search).includes('')){
      setAlert(true);
      setTimeout(()=>{
        setAlert(false)
      },2500)
      return;
    }

    fetchWeather(search)
  }

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
        <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors ease-in-out py-2 px-10 mx-auto rounded-md border-2 border-green-900 font-semibold">Check weather</button>
      </legend>
    </form>
  )
}
