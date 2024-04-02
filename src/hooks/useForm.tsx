import { ChangeEvent, FormEvent, useState } from 'react'
import { SearchType } from '../types';

interface FormProps {
  fetchWeather: (search: SearchType) => Promise<void>
}

export default function useForm({fetchWeather}:FormProps) {
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
  };

  return { search, alert, handleChange, handleSubmit }
}
