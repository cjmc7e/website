import { useState } from 'react'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import { Nav } from 'react-bootstrap'
import SearchBarPro from './SearchBarPro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 style={{textAlign: 'center'}}> Posterize anything. </h1>
      <SearchBar />
      <SearchBarPro />
    </>
  )
}

export default App
