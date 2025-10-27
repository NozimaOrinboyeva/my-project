import './App.css'
import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'

function App() {
  const [users, setUsers] = useState([{
    id: 1,
    image: 'https://picsum.photos/400?random=1',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400?random=2',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 3,
    image: 'https://picsum.photos/400?random=3',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 4,
    image: 'https://picsum.photos/400?random=4',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 5,
    image: 'https://picsum.photos/400?random=5',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 6,
    image: 'https://picsum.photos/400?random=6',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 7,
    image: 'https://picsum.photos/400?random=7',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 8,
    image: 'https://picsum.photos/400?random=8',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  },
  {
    id: 9,
    image: 'https://picsum.photos/400?random=9',
    firstName: 'Nozima',
    lastName: 'Orinboyeva',
    age: 21,
    from: 'Xorazm',
    job: 'Frontent developer',
    gender: 'women'
  }

])
  return (
    <div className='App'>
      <Navbar  usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No UsersS</h2>}
        </div>
        <UserList users={users}/>
        </main>
        <Footer/>      
    </div>
  )
}

export default App
