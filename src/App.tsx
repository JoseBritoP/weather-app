import './App.css'
import Form from './components/Form/Form'

function App() {

  return (
    <main className='flex flex-col justify-center items-center gap-y-10'>
      <h1 className='text-center font-bold text-4xl mt-8 mb-4'>Weather App</h1>
      <section className='w-full max-w-[100rem] mx-auto
        flex flex-col items-center justify-center
        gap-y-5
        md:flex-row md:justify-evenly 
      '>
        <Form/>
        <p>h</p>
      </section>
    </main>
  )
}

export default App