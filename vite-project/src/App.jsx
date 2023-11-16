import SearchBar from './SearchBar'
import Navbar from './Navbar'
import SearchBarPro from './SearchBarPro'
import SearchButton from './SearchButton'
import "./home.css"

function App() {
  return (
    <>
      <Navbar />
      <div className='center_container'>
        <h1 style={{textAlign: 'center', fontSize: '50px', paddingTop: '15vw'}}> Posterize anything. </h1>
        <SearchBarPro />
        <br />
        <SearchButton />
      </div>
    </>
  )
}

export default App
