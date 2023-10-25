import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

class JwtDecoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwtResponse: 0,
      jwtPhone: '',
      phtoken: ''
    };
  }

  decodeJwt = () => {
    const API_KEY = 'API_KEY'; // Specify your API key
    const { phtoken } = this.state;

    try {
      const decoded = jwt.verify(phtoken, API_KEY);
      this.setState({
        jwtResponse: 1, // JWT decoded successfully
        jwtPhone: decoded.country_code + decoded.phone_no
      });
    } catch (error) {
      this.setState({
        jwtResponse: 0, // Invalid JWT
        jwtPhone: ''
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.phtoken}
          onChange={(e) => this.setState({ phtoken: e.target.value })}
          placeholder="Enter JWT"
        />
        <button onClick={this.decodeJwt}>Decode JWT</button>
        <div>
          JWT Response: {this.state.jwtResponse}
          <br />
          JWT Phone: {this.state.jwtPhone}
        </div>
      </div>
    );
  }
}

export default JwtDecoder;
