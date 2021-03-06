import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <a style={linkStyle} href="https://timlucca.dev/">Home</a> | 
      <Link style={linkStyle} to="/todolist/"> Todo List</Link> | 
      <Link style={linkStyle} to="/todolist/about/"> About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '2rem',
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '1rem'
}