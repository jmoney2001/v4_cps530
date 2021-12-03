import React from 'react';
import './App.css';

import express_logo from './images/express_logo.png';
import node_logo from './images/node_logo.png';
import react_logo from './images/react_logo.jpg';

function Page2() {
    const HomeStyle = {
        color: 'purple',
        textDecoration: 'none',
        fontWeight: "bold",
      }
    return (
    <div>
        <img src={express_logo} alt="express_logo.png" width="375" height="200"/>
        <img src={node_logo} alt="node_logo.png" width="375" height="200"/>
        <img src={react_logo} alt="react_logo.jpg" width="375" height="200"/>
        
        <h2>CPS530 Final Project</h2>
        <h3 style={HomeStyle}>We have chosen to go with react for our front-end, and express for our back-end, while choosing Node.js to combine the two.</h3>
        <br />
        <h3 style={HomeStyle}>React is the fastest growing front-end framework, and will (if not already) is the most popular front-end framework. The strength is in its popularity. Knowing react well opens up so many doors. React is created and supported by Facebook, and as one could have guessed, Facebook is written in React</h3>
        <br />
        <h3 style={HomeStyle}>The beauty of Express.js is the fact that it can be so easily integrated with Node.js. For this reason, Express is arguably the most common back-end framework when it comes to full-stack development, especially when Node.js is involved. The reason why Express.js is so popular is that it is in JavaScript! This means that you do not have to use two different programming languages for your respective front-end and back-ends... Both can be written in the same language!</h3>
    </div>
    );
}

export default Page2;