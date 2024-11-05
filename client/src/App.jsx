import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import FormData from './Components/FormData'
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/formdata" element={<FormData />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App
