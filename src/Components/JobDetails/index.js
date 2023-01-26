import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Profile from '../Profile'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobsList: [],
    searchInput: '',
    employmentType: '',
    minPackage: '',
  }

  componentDidMount() {
    this.getJobLists()
  }

  getJobLists = async () => {
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
  }

  render() {
    return (
      <div className="Job-details-container">
        <div className="left-container">
          <Profile />
        </div>

        <div className="right-container">
          <div className="search-input-container">
            <input
              className="search-input"
              placeholder="Search"
              type="search"
            />
            <button type="button" className="btn-search">
              <BsSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default JobDetails
