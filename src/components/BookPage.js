import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box } from "rebass";

export class BookPage extends Component {
  state = {
    book: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`/wp-json/wp/v2/books/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          book: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.error(err));
  }
  render() {
    const { book, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            px: 3
          }}
        >
          <Link to="/">Go Back</Link>
          <hr />
          <h1>{book.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: book.content.rendered }}
          ></div>
          <h4>Publisher: {book.acf.publisher}</h4>
        </Box>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default BookPage;
