import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar';
import RecipeItem from './components/RecipeItem/RecipeItem';
import Home from './pages/Home';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/info/:id' element={<Info />} />
      
        {/* <Info /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
