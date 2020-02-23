import React, { Component } from 'react'
import axios from 'axios'

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount(){
    axios.get('/wp-json/wp/v2/books')
      .then(res => this.setState({
        books: res.data,
        isLoaded: true
      }))
      .catch(err => console.error(err))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        
      </div>
    )
  }
}

export default Books
