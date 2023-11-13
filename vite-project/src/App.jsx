import { useState } from 'react'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import { Nav } from 'react-bootstrap'
import SearchBarPro from './SearchBarPro'
import "./home.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='center_container'>
        <h1 style={{textAlign: 'center', fontSize: '50px', paddingTop: '15vw'}}> Posterize anything. </h1>
        <SearchBar />
        <SearchBarPro />
      </div>
    </>
  )
}

export default App
