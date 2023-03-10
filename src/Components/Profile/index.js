import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import './index.css'

class Profile extends Component {
  state = {
    apiStatus: true,
    profileData: {},
  }

  componentDidMount() {
    this.getProfiles()
  }

  getProfiles = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const profileApiUrl = 'https://apis.ccbp.in/profile'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileApiUrl, options)
    console.log(response)
    const profileData = await response.json()

    console.log(profileData)
  }

  getProfilesList = () => <h1 className="heading">hhhh</h1>

  render() {
    const {apiStatus} = this.state

    return (
      <div className="profile-list-container">
        {apiStatus ? (
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        ) : (
          this.getProfilesList()
        )}
      </div>
    )
  }
}
export default Profile
