import React, {Component} from 'react';
import Book from './Book';

export default class Shelf extends Component{
  render() {
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* Book Component*/}
              <Book/>
            </ol>
          </div>
        </div>
    );
  }
}
export default Shelf;
