import './NewUserFrom.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function NewUserFrom({ addUser }) {
  const [user, setUser] = useState({
    image: '',
    firstName: '',
    lastName: '',
    age: '',
    from: '',
    job: '',
    gender: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = { ...user, id: uuidv4() }
    addUser(newUser)
  }

  return (
    <div className='modal-wrapper'>
      <div className='overlay'>
        <div className='modal'>
          <h2>Create New User:</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, image: e.target.value }))}
                type="url"
                required
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, firstName: e.target.value }))}
                type="text"
                required
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, lastName: e.target.value }))}
                type="text"
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, age: e.target.value }))}
                type="number"
                required
              />
            </label>
            <label>
              <span>From:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, from: e.target.value }))}
                type="text"
                required
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                onChange={(e) => setUser(prev => ({ ...prev, job: e.target.value }))}
                type="text"
                required
              />
            </label>

            <div className='gender'>
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  onChange={(e) => setUser(prev => ({ ...prev, gender: e.target.value }))}
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  onChange={(e) => setUser(prev => ({ ...prev, gender: e.target.value }))}
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                />
              </label>
            </div>

            <button className='modal-btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserFrom
