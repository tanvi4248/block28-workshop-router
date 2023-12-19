import './App.css'
import Path from './components/Path';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div id="container">
      <Nav/>
      <div id="main-section">
        <Path/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
