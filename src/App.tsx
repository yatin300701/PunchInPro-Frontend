import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Home/Home'
import EmployeeMainScreen from './Employee/EmployeeMainScreen'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeMainScreen />} />
          {/* <Route path="/about" element={<About />} /> */}
       </Routes>
    </>
  )
}

export default App
