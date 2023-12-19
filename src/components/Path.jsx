import { Route,Routes } from "react-router-dom"
import Blue from "./Blue"
import Home from "./Home"
import Red from "./Red"
import Black from "./Black"


export default function Path(){
    return(
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blue' element={<Blue/>}></Route>
        <Route path='/red' element={<Red/>}></Route>
        <Route path='/black' element={<Black/>}></Route>
      </Routes>
    )
}