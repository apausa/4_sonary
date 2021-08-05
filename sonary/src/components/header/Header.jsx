import React from 'react';
import './header.input.scss';
import logo from './sonary.svg';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__top">
        <div className="header__aux" />
        <figure clasName="header__sonary">
          <a clasName="sonary__anchor" href="/dashboard">
            <img className="sonary__icon" alt="sonary icon" src={logo} />
          </a>
        </figure>

        <figure className="header__profile">
          <a className="profile__anchor" href="/profile">
            <img className="profile__icon" alt="profile icon" />
          </a>
        </figure>
      </nav>
      <div className="header__bottom" />
    </header>
  );
}
