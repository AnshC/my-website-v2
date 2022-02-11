/** @jsxImportSource theme-ui */
import styles from '../styles/Components.module.css'
import Link from 'next/link'
export default function Navbar () {
    return (
        <div className={styles.navWrapper}>
            <div>
                <h1 className="head-m" sx={{ color: "text" }}>Ansh Chauhan</h1>
                <p className={styles.me} sx={{ color: "accent" }}>Front-end Developer/Designer</p>
            </div>
            <ul>
                <li>
                    <Link href="/" passHref={true}>
                        <a sx={{ color: "grey", ':hover': { color: "text"} }}>~/</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog" passHref={true}>
                        <a sx={{ color: "grey", ':hover': { color: "text"} }}>~/blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" passHref={true}>
                        <a sx={{ color: "grey", ':hover': { color: "text"} }}>~/about</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}