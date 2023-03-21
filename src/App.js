import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import Home from './page/Home';

function App() {
    return(
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Header>
        
        </BrowserRouter>

    );
  
}

export default App;
