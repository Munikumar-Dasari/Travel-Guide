import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TravelPackageItem from '../TravelPackageItem'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: false, travelPackageList: []}

  componentDidMount() {
    this.getPackagesList()
  }

  getPackagesList = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const fetchingData = data.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({
        travelPackageList: fetchingData,
        isLoading: false,
      })
    }
  }

  render() {
    const {travelPackageList, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Travel Guide</h1>
        <hr className="line" />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="packages-list">
            {travelPackageList.map(eachItem => (
              <TravelPackageItem key={eachItem.id} packageDetails={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
