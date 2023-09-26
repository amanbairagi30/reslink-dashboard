import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SideBar from './components/SideBar'
import Header from './components/Header'
import Projects from './pages/Projects'
import Staffing from './pages/Staffing'
import Messages from './pages/Messages'
import Support from './pages/Support'
import Setting from './pages/Setting'
import SideBar from './components/Sidebar'

const App = () => {
  return (
    <div className='h-screen grid gap-2 app-body'>

      {/* Sidebar */}
      <div className='sidebar border-r-[0.1rem] border-[#101215]'>
        <SideBar />
      </div>
      {/* Header */}
      <div className='header  flex items-center justify-between px-8 w-full '>
        <Header />
      </div>
      {/* Main Content */}
      <div className='main-content overflow-y-scroll bg-[#20232a] px-8 p-8'>
          <Routes>
            <Route exact path='/' element={< Dashboard />}></Route>
            <Route exact path='/dashboard' element={< Dashboard />}></Route>
            <Route exact path='/projects' element={< Projects />}></Route>
            <Route exact path='/staffing' element={< Staffing />}></Route>
            <Route exact path='/messages' element={< Messages />}></Route>
            <Route exact path='/support' element={< Support />}></Route>
            <Route exact path='/settings' element={< Setting />}></Route>
          </Routes>
      </div>
    </div>
  )
}

export default App
