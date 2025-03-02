import {Routes, Route} from 'react-router-dom';
import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { Home } from './components/home/Home';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
       <Route path="/" element={<Home />} />
       </Routes>
       <Footer/>
    </div>
    
  )
}

export default App
