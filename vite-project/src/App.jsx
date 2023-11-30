import SearchBar from './SearchBar'
import Navbar from './Navbar'
import SearchBarPro from './SearchBarPro'
import SearchButton from './SearchButton'
import "./home.css"
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null);
  console.log(`DATA APP: ${JSON.stringify(data)}`);
  return (
    <>
  

      <Navbar />
      <div className='center_container'>
        <h1 style={{textAlign: 'center', fontSize: '50px', paddingTop: '15vw'}}> Posterize anything. </h1>
        <SearchBarPro setData={setData} />
        {/* <div> {data} </div> */}
        <br />
        <SearchButton data={data} />
        <canvas id='canvas'className="myCanvas"></canvas>
        
        

      </div>
    </>
  )
}

export default App
