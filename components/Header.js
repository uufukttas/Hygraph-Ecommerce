import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.logo}>
                    <p>
                        PLANTS <span className={styles.logo_span}>☘</span>
                    </p>
                </div>
            </Link>
            <div className={styles.nav_price}>
                <span>🛒</span>
                <p>$0.00</p>
            </div>
        </nav>
    );
};

export default Header;