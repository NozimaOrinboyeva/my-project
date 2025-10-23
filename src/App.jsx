import './App.css'
import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [users, setUsers] = useState([{} , {}])
  return (
    <div className='App'>
      <Navbar  usersLength={users.length} />
      <main>
        <h2>Content</h2>
        </main>
        <Footer/>      
    </div>
  )
}

export default App
