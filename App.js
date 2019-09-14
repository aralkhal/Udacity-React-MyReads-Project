import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';
import Search from './search';

import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }



  render() { 
    return (
      <div className="app">

        <Route path="/search" render={() => (
          <Search  
          showSearchPage={this.state.showSearchPage}
          changeStatus={this.changeStatus}
          />
        )}>
          
        </Route>

        <Route exact path="/" render={() => (
                  <div className="list-books">
                    <div className="list-books-title">
                      <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                  
                          <div className="bookshelf">
                            <CurrentlyReading/>
                          </div>
                  
                          <div className="bookshelf">
                            <WantToRead />
                          </div>
                  
                          <div className="bookshelf">
                          
                            <Read/>
                  
                          </div>
                        {/* </div> */}
                      </div>
        
                      <div className="open-search">
                        <Link to='/search'>
                           <button>Add a book</button>
                        </Link>
                      </div>

                  </div>
        )}>

        </Route>

          
              {/* Trying to do something */}
          {/* )}   */}
        </div> // End of first Div
    ) // return
  }
}

export default BooksApp
