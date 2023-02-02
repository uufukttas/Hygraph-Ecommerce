import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <nav className={`${styles.navbar} container`}>
            <Link href="/">
                <div className={styles.logo}>
                    <p>
                        PLANTS <span className={styles.logo_span}>☘</span>
                    </p>
                </div>
            </Link>
            <div className={`${styles.nav_price} snipcart-checkout`}>
                <span>🛒</span>
                <p className='snipcart-total-price'>$</p>
            </div>
        </nav>
    );
};

export default Header;