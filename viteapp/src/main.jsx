import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// this is one way to do it 
const anotherelement = (
  <a href="https://google.com" target='_blank'>hey visit me</a>
) 

// this is a react way , how react would have done it 

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank' },
  'visit google by react method'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactelement
)
