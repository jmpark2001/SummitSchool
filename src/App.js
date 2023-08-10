import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import ClassInfo from './pages/ClassInfo';
import Staff from './pages/Staff';
import Home from './pages/Home';
import About from './pages/About';
import Biblical from './pages/Biblical';
import Language from './pages/Language';
import Instrument from './pages/Instrument';
import Academic from './pages/Academic';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/classInfo" element={<ClassInfo/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/biblical" element={<Biblical/>}/>
          <Route path='/language' element={<Language/>}/>
          <Route path='/instrument' element={<Instrument/>}/>
          <Route path='/academic' element={<Academic/>}/>
        </Routes>
      </div>
    </>
  )

}

export default App;
