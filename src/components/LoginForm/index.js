import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', userPassword: '', isErrorMsg: false, errorMSg: ''}

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getUserPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  renderTheUserName = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="username" className="label-text">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="input-element"
          value={username}
          onChange={this.getUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  renderTheUserPassword = () => {
    const {userPassword} = this.state
    return (
      <div>
        <label htmlFor="password" className="label-text">
          PASSWORD
        </label>
        <br />
        <input
          id="password"
          className="input-element"
          value={userPassword}
          onChange={this.getUserPassword}
          type="password"
          placeholder="password"
        />
      </div>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({isErrorMsg: true, errorMsg: error})
  }

  submitTheLoginDetails = async event => {
    event.preventDefault()
    const {username, userPassword} = this.state
    const userDetails = {username, password: userPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <div className="login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-size"
          />

          <form onSubmit={this.submitTheLoginDetails}>
            {this.renderTheUserName()}
            {this.renderTheUserPassword()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {isErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
