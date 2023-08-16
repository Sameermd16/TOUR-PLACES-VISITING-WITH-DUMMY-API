import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import axios from 'axios'
import Tours from './Tours'

const API_URL = 'https://course-api.com/react-tours-project'

function App() {

  const [toursData, setToursData] = useState([])
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState('')

  const removeTour = (id) => {
    const newTours = toursData.filter((item) => {
        return (item.id !== id)
      })
      setToursData(newTours)
}

  //fetching the data with async await in a function 
  //we need a variable to store the data 
  //fetch the data always in try catch block
  const fetchData = async () => {
    setLoading(true)
    try{
      const {data} = await axios.get(API_URL)
      // console.log(data)
      setToursData(data)
      // console.log(toursData)
      setLoading(false)
    }catch(error) {
      setLoading(false)
      setErrMsg('Could not fetch the data. Try again later..')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {errMsg ? <h1>{errMsg}</h1> : null}
      {!loading && (<Tours toursData={toursData} removeTour={removeTour}  />)}
      {toursData.length === 0 && (
        <main>
          <h2>no tours left</h2>
          <button className='btn btn-primary ms-3' onClick={() => fetchData()}>Refresh</button>
        </main>
      )}
    </>
  )

//   if(loading) {
//     return (
//       <h1>Loading ...</h1>
//     )
//   }

//   if(toursData.length === 0) {
//     return (
//       <main>
//         <h2>no tours left</h2>
//         <button className='btn btn-primary ms-3' onClick={() => fetchData()}>Refresh</button>
//       </main>
//     )
//   }

//   return (
//     <main>
//       (<Tours toursData={toursData} removeTour={removeTour} />)
//     </main>
//   )
// }
}
export default App
