import SearchBar from './SearchBar'
import Navbar from './Navbar'
import SearchBarPro from './SearchBarPro'
import "./home.css"

function App() {
  return (
    <>
      <Navbar />
      <div className='center_container'>
        <h1 style={{textAlign: 'center', fontSize: '50px', paddingTop: '15vw'}}> Posterize anything. </h1>
        <SearchBarPro />
        <h2> hello </h2>
      </div>
    </>
  )
}

export default App
