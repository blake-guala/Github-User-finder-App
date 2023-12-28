import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
        <h1>Oops! Error 404(page not found),you seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        
    </div>
  )
}
