import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import './App.css';


function App() {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
        
        </BrowserRouter>

    );
  
}

export default App;
