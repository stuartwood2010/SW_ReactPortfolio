import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';


import './css/style.css';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element={<About/>}
        />
          <Route
          path='/mywork'
          element={<MyWork/>}
        />
          <Route
          path='/contact'
          element={<Contact/>}
        />
      </Routes>
    </div>
  );
}

export default App;
