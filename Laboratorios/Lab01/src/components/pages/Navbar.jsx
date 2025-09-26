import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (

    <ul className='navbar'>
      <li onClick={() => navigate('/')}>
        Pagina 1
      </li>
      <li onClick={() => navigate('/pag-2')}>
        Página 2
      </li>
    </ul>
  )
}

export default Navbar