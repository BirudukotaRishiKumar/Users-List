import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQGZ196v30coiA/profile-displayphoto-shrink_800_800/0/1668159327164?e=2147483647&v=beta&t=kuRhCoFHns_eFyJQiPPMiEBzAAlNZ6NBtj7TQNz3aH4',
    name: 'Rishi Kumar',
    role: 'Frontend Developer',
  },

  {
    uniqueNo: 2,
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQFbSmckVYUBGQ/profile-displayphoto-shrink_800_800/0/1683815030986?e=2147483647&v=beta&t=vLpQ_oOxfFyLE9Ja1x0mfMBHBZ7pJB_sBy7xGiDKF08',
    name: 'Likhitha',
    role: 'Programmer Analyst',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://www.linkpicture.com/q/photo1685013920-2.jpeg',
    name: 'Chandrika',
    role: 'System Engineer',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQE6h76jDnP4uw/profile-displayphoto-shrink_800_800/0/1682067206535?e=2147483647&v=beta&t=aOhEs4I8unx8Lnz1kER_OP-EnvCBTeWe6kS0mG0tJZc',
    name: 'Phanendra',
    role: 'System Engineer',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://www.linkpicture.com/q/photo1685013920.jpeg',
    name: 'Manjusha',
    role: 'Data Engineer',
  },
  {
    uniqueNo: 6,
    imageUrl:
      'data:image/jpeg;base64,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',
    name: 'Akanksha',
    role: 'Support Associate',
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://www.linkpicture.com/q/photo1685014375.jpeg',
    name: 'GJ Vamsi',
    role: 'System Engineer',
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://www.linkpicture.com/q/photo1685014700.jpeg',
    name: 'Mounika',
    role: 'System Engineer',
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://www.linkpicture.com/q/photo1685013920-1.jpeg',
    name: 'Danny Jeeva',
    role: 'System Engineer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">
          99 Teas Developers List
          <img
            className="cup"
            src="https://w7.pngwing.com/pngs/602/755/png-transparent-coffee-cup-tea-cup-fashion-accessories-coffee-thumbnail.png"
          />
          <img
            className="cup"
            src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png"
          />
        </h1>
        <input
          className="input"
          placeholder="Enter the Name"
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
