import React, { Component } from "react";
import axios from "axios";
import BookItem from "./BookItem";

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/books")
      .then(res =>
        this.setState({
          books: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Books;
