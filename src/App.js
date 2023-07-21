import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import ClassInfo from './pages/ClassInfo';
import Staff from './pages/Staff';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/classInfo" element={<ClassInfo/>}/>
          <Route path="/staff" element={<Staff/>}/>
        </Routes>
      </div>
    </>
  )

}

export default App;
