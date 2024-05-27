import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.index}>
            Index
      </div>
      <ul className={styles.indexLinks}>
        <li>
          <Link href="https://vxnuaj.life">
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
      <div className = {styles.findme}>
        Find me
      </div>
      <ul className={styles.findmeLinks}>
        <li>
            <Link href = "https://x.com/vxnuaj">
                Twitter
            </Link>
        </li>
        <li>
            <Link href = "https://github.com/vxnuaj">
                Github
            </Link>
        </li>
        <li>
            <Link href = "https://vxnuaj.substack.com">
                Substack
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
