import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabaseClient from '../superbaseClient.ts'
import logo from '../assets/logo.png'

interface Props {
  children?: ReactNode
}

const Navbar = (props: Props) => {
  const { children } = props

  const [burgerIsExpanded, setBurgerIsExpanded] = useState(false)
  const nav = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={() => nav('/KTSOCM/')}>
          <img src={logo} alt={''} />
        </a>

        <a
          className={`navbar-burger ${burgerIsExpanded ? 'is-active' : ''}`}
          onClick={() => setBurgerIsExpanded((prevState) => !prevState)}
          data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${burgerIsExpanded ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => nav('/KTSOCM/')}>
            Dashboard
          </a>
        </div>
        <div className="navbar-end">
          {children}
          <a
            className="navbar-item"
            onClick={() => supabaseClient.auth.signOut()}>
            Log out
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
