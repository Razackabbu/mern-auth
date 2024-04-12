import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-400'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
        <Link to='/'>
        <h1 className='font-bold'>MERN-Auth App</h1>
        </Link>
        <ul className='flex gap-5'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/sign-in">
            <li>Sign  In</li>
            </Link>
            <Link to="/sign-up">
            <li>SignUp</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}
