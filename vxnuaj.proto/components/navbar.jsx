import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.indexLinks}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/writing">
            Writing
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
      </ul>
      <ul className={styles.findmeLinks}>
        <li>
            <Link href = "https://x.com/vxnuaj">
              <img src = '/twicon.svg'></img>
            </Link>
        </li>
        <li>
            <Link href = "https://github.com/vxnuaj">
              <img src = '/gitico.svg'></img>
            </Link>
        </li>
        <li>
            <Link href = "https://vxnuaj.substack.com">
              <img src = '/subico.svg'></img>
            </Link>
        </li>
        <li>
            <Link href = "https://medium.com/@vxnuaj">
              <img src = '/medico.svg'></img>
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
