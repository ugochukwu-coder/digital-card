import './App.css';
import { BrowserRouter} from "react-router-dom"
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'



function App() {
  return (
    <div className="App__container">
      <div className='wrapper'>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
     </div>
  </div>
  )
}

export default App
