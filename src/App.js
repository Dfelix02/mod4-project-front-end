import React from 'react';
import Header from './components/header';
import Body from './components/body';


class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div> 
            <Header />
            <Body />
            </div>);
    }
}

export default App;