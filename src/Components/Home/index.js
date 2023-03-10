import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="main-container">
    <Header />
    <div className="home-app-container">
      <div className="home-container">
        <h1 className="heading">Find The Job That Fits Your LIfe</h1>
        <p className="paragraph-home">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="find-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home
