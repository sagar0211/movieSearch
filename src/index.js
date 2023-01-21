import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import SearchMovie from "./SearchMovie"


class Main extends React.Component {
  render() {
    return (
      <div>
        <header className="head" >MOVIE SEARCH WEB APP</header>
        <div className="container">
          <title className="title">Movie Search using React</title>
          <SearchMovie />
        </div>
      </div>
  
      );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
