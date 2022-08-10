import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo de um foguete" />
      <div>
        <span>to</span><span>do</span>
      </div>
    </header>
  );
}