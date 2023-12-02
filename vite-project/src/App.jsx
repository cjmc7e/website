import SearchBar from './SearchBar'
import Navbar from './Navbar'
import SearchBarPro from './SearchBarPro'
import SearchButton from './SearchButton'
import CanvasDownloadButton from './CanvasDownloadButton'

import "./home.css"
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null)
  const [code, setCode] = useState(null)
  console.log(`DATA APP: ${JSON.stringify(data)}`);
  console.log(`Stats1:` + stats);
  return (
    <>
  

      <Navbar />
      <div className='center_container'>
        <h1 style={{textAlign: 'center', fontSize: '50px', paddingTop: '15vw'}}> Posterize anything. </h1>
        <SearchBarPro setData={setData}/>
        {/* <div> {data} </div> */}
        <br />
        {/* <script src="bundle.js"></script> */}
        <SearchButton data={data} setStats={setStats}/>
        <CanvasDownloadButton />
        

      </div>
    </>
  )
}

export default App
