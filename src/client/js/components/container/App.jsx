import React, { Component } from 'react';

import NavMenu from './NavMenu.jsx'
import Hero from './Hero.jsx';

class App extends React.Component {
     constructor() {
         super()
     }
     render() {
         return (
             <NavMenu />,
             <Hero />
         )
     }
}

export default App
