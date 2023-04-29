import React from 'react';
import css from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navbarlist}>
        <li className={css.navbaritem}><a href="/" className={css.navbarlink}>Inicio</a></li>
        <li className={css.navbaritem}><a href="/acerca-de" className={css.navbarlink}>Acerca de</a></li>
        <li className={css.navbaritem}><a href="/contacto" className={css.navbarlink}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
