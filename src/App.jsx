import {useEffect, useState} from 'react'
import './App.css'
import API from './API'
function App() {
  const [data, setData] = useState(null)

  const getData = () => {
    API.get(`/api/v1/orders/categories/`)
      .then((res) => {
        const data = res.data.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err)
      });
  };
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <>
      <h1>Widget Test Cors</h1>
      <div className="card">
        <button onClick={() => getData()}>
          Get Datax
        </button>
        <p>
          React Widget
        </p>
      </div>
    </>
  )
}

export default App
