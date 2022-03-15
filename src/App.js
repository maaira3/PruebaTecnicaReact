import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './Screens/Main/MainPage'
import NavBar from './Screens/components/NavBar';
import { setCharacters } from './reducers/characterReducers';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { setEpisodes } from './reducers/episodesReducers';
import Characters from './Screens/Characters/Characters';
import Episodes from './Screens/Episodes/Episodes';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(setCharacters())
      dispatch(setEpisodes())
  },[dispatch])

  return (
    <div className="App">
      <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<><NavBar/><MainPage/></>} ></Route>   
          <Route exact path ="/characters" element={<><NavBar/><Characters/></>} ></Route>  
          <Route exact path ="/episodes" element={<><NavBar/><Episodes/></>} ></Route>  
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
