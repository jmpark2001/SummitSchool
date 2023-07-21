import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import ClassInfo from './pages/ClassInfo';
import Staff from './pages/Staff';
import Home from './pages/Home';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break;
    case "/registration":
      component = <Registration/>;
      break;
    case "/classInfo":
      component = <ClassInfo/>;
      break;
    case "/staff":
      component = <Staff/>;
      break;
  }
  return (
    <>
      <Navbar/>
      {component}
    </>
  )

}

export default App;
