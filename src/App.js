
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/Services';
import Meet from './Components/Meet';
import NavBar from './Components/layout/NavBar';
function App() {
  return (
    <div className="App">
     
      <NavBar/>
     <Routes>
      <Route path='/home' element = {<HomePage/>}/>
      <Route path='/about' element = {<AboutPage/>}/>
      <Route path='/service' element = {<ServicesPage/>}/>
      <Route path = '*' element = {<>
      <Meet/>
    
      </>}/>
     </Routes>
    
    </div>
  );
}

export default App;
