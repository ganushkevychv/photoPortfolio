import React from 'react';
import Menu from '../components/Menu'

const Header = () => {

return(
    <div>
<Menu/>
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
      </div>
)
}
export default Header;