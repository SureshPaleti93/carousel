import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentItemId: 0, totalLength: '', isAssigned: false}

  assignedData = reviewsList => {
    const {isAssigned} = this.state
    if (isAssigned === false) {
      this.setState({isAssigned: true, totalLength: reviewsList.length})
    }
  }

  leftArrow = () => {
    const {currentItemId, totalLength} = this.state
    console.log(totalLength)
    if (currentItemId !== 0) {
      this.setState(prevState => ({currentItemId: prevState.currentItemId - 1}))
    } else {
      this.setState({currentItemId: totalLength - 1})
    }
  }

  rightArrow = () => {
    const {currentItemId, totalLength} = this.state
    console.log(totalLength)
    if (currentItemId < totalLength - 1) {
      this.setState(prevState => ({currentItemId: prevState.currentItemId + 1}))
    } else {
      this.setState({currentItemId: 0})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentItemId} = this.state
    const carouselList = reviewsList[currentItemId]
    const {username, imgUrl, companyName, description} = carouselList

    return (
      <div className="bg-container">
        {this.assignedData(reviewsList)}
        <div className="content-container">
          <h1 className="heading-element">Reviews</h1>
          <div>
            <img src={imgUrl} alt={username} />
          </div>
          <div className="display-message">
            <button type="button" onClick={this.leftArrow} value="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div>
              <p>{username}</p>
            </div>
            <button type="button" onClick={this.rightArrow} value="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="descr-container">
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
