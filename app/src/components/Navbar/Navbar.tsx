import React, { type ReactElement } from 'react'

export const Navbar = (): ReactElement => {
  return (
    <nav className="com-nav-mobile">
      <div className="row">
        <a href="/" className="col-2 item-foo">
          <i className="icon-home"></i>
          <p>Home</p>
        </a>
        <a href="/" className="col-4 item-foo">
          <i className="icon-club"></i>
          <p>
            {' '}
            <br />
            Club LA NACION
          </p>
        </a>
        <a href="/" className="col-3 item-foo">
          <i className="icon-comment"></i>
          <p>Mi cuenta</p>
        </a>
        <button className="col-2 item-foo">
          <i className="icon-menu"></i>
          <p>Menú</p>
        </button>
      </div>
    </nav>
  )
}
