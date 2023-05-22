import {BrowserRouter, Routes, Route} from 'React-router-dom'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <div> 
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
    </Routes>
    <BrowserRouter/>
    <div/>
  )
}
