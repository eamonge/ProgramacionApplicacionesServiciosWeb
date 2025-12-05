import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (

    <ul className='navbar'>
      {/* Uso del ::after para setear estilo de ítems de navegación */}
      {/* Uso del ::before para indicar la página actual del usuario */}
      <li
        onClick={() => navigate('/')}
        className={location.pathname === '/' ? 'active' : ''}
      >
        Pagina 1
      </li>
      <li
        onClick={() => navigate('/pag-2')}
        className={location.pathname === '/pag-2' ? 'active' : ''} 
      >
        Página 2
      </li>
      <li
        onClick={() => navigate('/pag-3')}
        className={location.pathname === '/pag-3' ? 'active' : ''} 
      >
        Doctores
      </li>
    </ul>
  )
}

export default Navbar