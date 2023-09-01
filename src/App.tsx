/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import './App.css'

const App = (): JSX.Element => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(async res => await res.json())
      .then((res) => {
        console.log(res)
        setData(res.results)
      })
      .catch((error) => {
        console.error('Error:', error)
      }
      )
  }, [])

  return (
    <div className='mainTitle'>
      <h1 >Recetas de Sol </h1>

    {JSON.stringify(data)}
    </div>
  )
}
export default App
