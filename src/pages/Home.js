import React from 'react';
import Messenger from '../components/Messenger'

const Home = () => {

return(
    <div>

<header className="App-header">
        <h1>@nastkazgdanska</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Messenger/>
      </div>
)
}
export default Home;